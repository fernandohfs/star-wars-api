class HealthController {
  ping(req, res) {
    return res.json({ message: 'pong :)' });
  }
}

module.exports = new HealthController();