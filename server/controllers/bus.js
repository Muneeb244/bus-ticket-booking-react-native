import Bus from '../models/bus.js';

export const getBusDetails = async (req, res) => {
    try {
        const {busId} = req.params;
        if(!busId) return res.status(400).json({ error: "Bus id id requried" });

        const bus = await Bus.findOne({busId});
        if(!bus) return res.status(404).json({ error: "Bus not found" });

        res.status(200).json({
            success: true,
            bus
        })
    } catch (error) {
        console.log("Error fetching bus details", error);
        res.status(500).json({ error: "Internel server error" });
    }
}

export const searchBuses = async (req, res) => {
    try {
        const {from, to, date} = req.body;
        if(!from || !to || !data) {
            return res.status(400).json({error: "from, to and date are requried"});
        }

        const selectedDate = new Date(date);
        const startOfDay = new Date(selectedDate.setHours(0, 0, 0, 0));
        const endOfDay = new Date(selectedDate.setHours(23, 59, 59, 999));

        const buses = await Bus.find({
            from,
            to,
            departureTime: { $gte: startOfDay, $lte: endOfDay}
        });

        res.status(200).json({success: true, data: buses})

    } catch (error) {console.log("Error searching buses", error);
        res.status(500).json({ error: "Internel server error" });
    }
}