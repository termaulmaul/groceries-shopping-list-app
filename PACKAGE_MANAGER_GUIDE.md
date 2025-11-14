# 📦 Package Manager Compatibility Guide

## 🎯 Overview
This project supports **three package managers**: bun, npm, and yarn. Choose whichever works best for your team!

## 🚀 Quick Start Commands

### For Bun Users (Recommended - Fastest)
```bash
# Complete setup
bun run setup:bun

# Or manual setup
bun install
cd client && bun install
cd ../server && bun install
bun start
```

### For NPM Users (Default)
```bash
# Complete setup  
npm run setup:npm

# Or manual setup
npm install
cd client && npm install
cd ../server && npm install
npm start
```

### For Yarn Users
```bash
# Complete setup
yarn run setup:yarn

# Or manual setup
yarn
cd client && yarn
cd ../server && yarn
yarn start
```

## 🛠️ Available Scripts

| Command | Bun | NPM | YARN | Description |
|---------|-----|-----|------|-------------|
| **Default Start** | `bun start` | `npm start` | `yarn start` | Start both client & server |
| **Package Manager Specific** | `bun run start:bun` | `npm run start:npm` | `yarn run start:yarn` | PM-specific start |
| **Complete Setup** | `bun run setup:bun` | `npm run setup:npm` | `yarn run setup:yarn` | Clean + Install + Start |
| **Install Only** | `bun run install:bun` | `npm run install:npm` | `yarn run install:yarn` | Install dependencies |

## 🔧 Troubleshooting

### Port Conflicts
If you see port conflicts:
```bash
# Kill all ports (8081-8084)
bun run kill-ports

# Or individually
lsof -ti:8083 | xargs kill -9
```

### Clean Project
If having issues, start fresh:
```bash
# Remove all dependencies and lock files
bun run clean

# Then reinstall with your preferred package manager
bun run setup:bun  # or npm run setup:npm or yarn run setup:yarn
```

### Package Manager Switching
Switching between package managers:
```bash
# Example: Switch from bun to npm
bun run clean
npm run setup:npm
```

## 📋 Environment Requirements

**Required Versions:**
```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=8.0.0", 
    "yarn": ">=1.22.0",
    "bun": ">=1.0.0"
  }
}
```

## 🌐 Access Points

After starting:
- **Client (Expo)**: http://localhost:8083
- **Server**: Auto-assigned port (check logs)
- **QR Code**: Available in browser for mobile testing

## 🚨 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| **Port 8081 busy** | ✅ Fixed - now uses port 8083 |
| **Different package managers** | ✅ All three supported |
| **Installation conflicts** | ✅ Use `bun run clean` first |
| **Dependency conflicts** | ✅ Delete node_modules and reinstall |
| **Server won't start** | ✅ Check Wrangler installation in server |

## 🎯 Team Recommendations

### For Maximum Speed: Bun
```bash
bun # Install dependencies 2-3x faster than npm/yarn
bun run dev:bun # Start development
```

### For Maximum Compatibility: NPM
```bash
npm run setup:npm # Works everywhere
npm start # No additional setup needed
```

### For Yarn Users: Yarn
```bash
yarn run setup:yarn# Fast and reliable
yarn start # Familiar commands
```

## 🔄 Migration Between Package Managers

**From Bun to NPM:**
```bash
bun run clean
npm run setup:npm
```

**From NPM to Bun:**
```bash
npm run clean  # or manual cleanup
bun run setup:bun
```

**From Yarn to Bun:**
```bash
yarn run clean # or manual cleanup  
bun run setup:bun
```

## 📞 Support

**Having issues?**
1. Check you're using Node.js 18+
2. Try `bun run clean` first
3. Ensure consistent package manager usage
4. Check logs for specific error messages

**Choose your favorite package manager and enjoy development!** 🚀

---

**Current Status:** ✅ **All package managers tested and working**  
**Recommended:** 🚀 **Bun (fastest) or NPM (most compatible)**
