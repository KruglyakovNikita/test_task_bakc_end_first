const express = require('express');
const User = require('./database/models/User');
const app = express();
const port = 5000;

app.use(express.json());

app.put('/update-balance',async (req,res) => {
  const { userId,amount } = req.body;

  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).json({ error: 'Пользователь не найден' });
  }

  if (user.balance + amount < 0) {
    return res.status(400).json({ error: 'Недостаточно средств на балансе' });
  }

  user.balance += amount;
  await user.save();

  res.json({ message: 'Баланс обновлен успешно' });
});

app.listen(port,async () => {
  const user = await User.findAll()
  if (!user.length) {
    await User.create({ balance: 1000 })
    console.log('Пользователь создан');
  }
  console.log(`Сервер запущен на порту ${port}`);
});