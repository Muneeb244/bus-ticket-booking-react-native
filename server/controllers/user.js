import User from '../models/User.js'; // adjust this path if needed
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateTokens = (user) => {
    const accessToken = jwt.sign(
        { userId: user?._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );

    const refreshToken = jwt.sign(
        { userId: user?._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );

    return { accessToken, refreshToken };
};

const loginOrSignup = async (req, res) => {
    const { email, password, name, phone } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: 'Invalid credentials' });
            }
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            user = new User({ name, email, phone, password: hashedPassword });
            await user.save();
        }

        const {accessToken, refreshToken} = generateTokens(user.toObject());

        res.status(200).json({
            message: user.createdAt ? 'Login successful' : 'Signup successful',
            user,
            accessToken,
            refreshToken
        });

    } catch (error) {
        console.log("Login error", error);
        res.status(500).json({ error: "Failed to authenticate" });
    }
};

const refreshToken = async (req, res) => {
    const {refreshToken: reqRefreshToken} = req.body;

    if(!reqRefreshToken) return res.status(401).json({error: "NO refresh token provided"});

    try {
        const decoded = jwt.verify(
            reqRefreshToken, 
            process.env.REFRESH_TOKEN_SECRET
        );

        const user = await User.findById(decoded.userId);

        if(!user) return res.status(404).json({error: "User not found"});

        const accessToken = jwt.sign(
            {userId: user._id},
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
        )

        res.status(200).json({accessToken})
    } catch (error) {
        console.log("Login error", error);
        res.status(500).json({ error: "Failed to send refresh token" });
    }
}


export {loginOrSignup, refreshToken};