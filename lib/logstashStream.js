const net = require("net");

// Create a connection to Logstash (running locally)
const logstashStream = net.createConnection({ port: 5044, host: "127.0.0.1" });

logstashStream.on("error", (err) => {
  console.error("Logstash connection error:", err);
});

module.exports = logstashStream;
