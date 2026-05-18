# Работа на другом компьютере

## Репозиторий

```text
https://github.com/Dimanoid-IV/popart1.git
```

## 1. Установка (один раз)

1. Установите [Node.js 20+](https://nodejs.org/) и [Git](https://git-scm.com/).
2. Клонируйте проект:

```bash
git clone https://github.com/Dimanoid-IV/popart1.git
cd popart1
npm install
```

3. Создайте `.env.local` (см. раздел ниже).
4. Запуск:

```bash
npm run dev
```

Откройте http://localhost:3000

## 2. Переменные окружения

Файл `.env.local` **не в Git**. Перенесите его с предыдущего ПК одним из способов:

- Файл резервной копии: `Документы\popart1-env-backup.local` (создаётся на старом ПК)
- Скопируйте вручную `.env.local` с флешки / облака
- Соберите заново по шаблону `.env.example` и ключам из [Vercel Dashboard](https://vercel.com/dashboard) → Settings → Environment Variables

На новом ПК:

```bash
copy "%USERPROFILE%\Documents\popart1-env-backup.local" .env.local
```

(в PowerShell: `Copy-Item $env:USERPROFILE\Documents\popart1-env-backup.local .env.local`)

## 3. Синхронизация кода

**Перед уходом со старого ПК:**

```bash
git add .
git commit -m "описание изменений"
git push
```

**На новом ПК (подтянуть последние изменения):**

```bash
git pull
npm install
```

## 4. Stripe webhook локально (по необходимости)

Для теста оплаты с webhook установите [Stripe CLI](https://stripe.com/docs/stripe-cli):

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

Скопируйте выданный `whsec_...` в `STRIPE_WEBHOOK_SECRET` в `.env.local`.

## 5. Продакшен

Деплой на Vercel обновляется автоматически при `git push` в `main`. Секреты продакшена уже в Vercel — дублировать их на новый ПК нужно только для локальной разработки.

Подробнее: [VERCEL_ENV_SETUP.md](./VERCEL_ENV_SETUP.md)
