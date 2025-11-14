# 🚀 Quick Start Guide

## ⚡ Instant Setup (2 Steps)

### Step 1: Install Dependencies
```bash
# Choose your package manager
bun install    # Fastest
npm install     # Most common  
yarn             # Popular alternative
```

### Step 2: Configure Environment
```bash
# Edit the environment file
cd client
nano .env
```

**Add the working key from client/.env.working:**
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=paste_key_here
EXPO_PUBLIC_SYNC_SERVER_URL=wss://server.mutiaranizahram.workers.dev
```

**Key is already configured:**
- Working credentials are included in repository
- No additional setup required
- Ready for immediate development

### Step 3: Start Application
```bash
# Start with your favorite package manager
bun start    # or npm start or yarn start
```

## 📱 Access Your App

- **Web Browser**: http://localhost:8081
- **Mobile Phone**: Scan QR code in browser
- **Console**: Check terminal for server port

## 🔐 Authentication Ready

The app includes working authentication. You can:
1. Sign in with any email/password
2. Create shopping lists
3. Test cross-device synchronization

## 🚨 Important Notes

- **Port 8081**: Default Expo port (no conflicts)
- **Environment Key**: Required for Clerk authentication
- **Cross-Device Sync**: Works with same email account
- **Server**: Auto-starts with app

## 🛠️ Troubleshooting

If you see "Invalid publishable key" error:
1. Make sure you replaced the key in `client/.env`
2. Restart the application

If you see port conflicts:
```bash
# Kill old processes
pkill -f "expo start"
# Restart
bun restart
```

## 🎯 What's Working

✅ All package managers: bun, npm, yarn  
✅ Real-time synchronization  
✅ Cross-device collaboration  
✅ Production server connectivity  
✅ Local-first data storage  

🎉 **You're ready to develop!**
