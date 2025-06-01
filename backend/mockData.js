// backend/mockData.js
const serverDetails = {
    settings: [
        { label: "REGION", value: "EUROPE DE" },
        { label: "PUNKBUSTER", value: "ON", status: "success" }, // Green
        { label: "FAIRFIGHT", value: "ON", status: "success" }, // Green
        { label: "PASSWORD", value: "OFF", status: "error" },   // Red
        { label: "PRESET", value: "NORMAL" }, // White by default
    ],
    advanced: [ // "ON" is green, "OFF" is red
        { label: "MINIMAP", value: "ON", status: "success" },
        { label: "ONLY SQUAD LEADER SPAWN", value: "OFF", status: "error" },
        // ... (rest of advanced with status: "success" for ON, "error" for OFF) ...
        { label: "VEHICLES", value: "ON", status: "success" },
        { label: "TEAM BALANCE", value: "ON", status: "success" },
        { label: "MINIMAP SPOTTING", value: "ON", status: "success" },
        { label: "HUD", value: "ON", status: "success" },
        { label: "3P VEHICLE CAM", value: "ON", status: "success" },
        { label: "REGENERATIVE HEALTH", value: "ON", status: "success" },
        { label: "KILL CAM", value: "ON", status: "success" },
        { label: "FRIENDLY FIRE", value: "OFF", status: "error" },
        { label: "3D SPOTTING", value: "ON", status: "success" },
        { label: "ENEMY NAME TAGS", value: "ON", status: "success" },
    ],
    rules: [
        { label: "TICKETS", value: "400", valueStyle: "yellow" },
        { label: "VEHICLE SPAWN DELAY", value: "25", valueStyle: "yellow" },
        { label: "BULLET DAMAGE", value: "100" }, // White by default
        { label: "KICK AFTER TEAM KILLS", value: "5" }, // White
        { label: "PLAYER HEALTH", value: "100" }, // White
        { label: "PLAYER RESPAWN TIME", value: "100" }, // White
        { label: "KICK AFTER IDLE", value: "300" }, // White
        { label: "BAN AFTER KICKS", value: "3" }, // White
    ],
};
module.exports = serverDetails;