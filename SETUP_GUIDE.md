# 🚀 Setup Guide - Groceries Shopping List App

## 📋 Overview
This is a local-first shopping list application with real-time synchronization built with Expo, TinyBase, and Cloudflare Workers.

## 🛠️ Prerequisites
- **Node.js** 18+ (or Bun recommended)
- **Expo CLI** (`npm install -g @expo/cli`)
- **Clerk Account** for authentication
- **Cloudflare Account** for server deployment

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/termaulmaul/groceries-shopping-list-app.git
cd groceries-shopping-list-app
```

### 2. Install Dependencies
```bash
# Install root dependencies
bun install

# Install client dependencies
cd client && bun install

# Install server dependencies
cd ../server && bun install

# Return to root
cd ..
```

### 3. Environment Setup
```bash
# Copy the example environment file
cd client
cp .env.example .env

# Edit .env with your keys
nano .env
```

#### Required Environment Variables:
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_key_here
EXPO_PUBLIC_SYNC_SERVER_URL=wss://server.mutiaranizahram.workers.dev
```

### 4. Clerk Authentication Setup
1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create new application or use existing
3. Get your publishable key
4. Add it to `client/.env`

### 5. Single Command Start
```bash
bun start
```

This will start:
- **Client** at http://localhost:8081
- **Server** at http://localhost:8787

## 🗄️ Database Schema (ERD)

### ShoppingListsStore (Per User)
- **Store ID**: `shoppingListsStore-{userId}`
- **Table**: `lists`
  - `id`: string (UUID)
  - `valuesCopy`: string (JSON metadata)

### ShoppingListStore (Per Shopping List)
- **Store ID**: `shoppingListStore-{listId}`
- **Tables**:
  - **products**: id, name, quantity, units, isPurchased, category, notes, createdBy, createdAt, updatedAt
  - **collaborators**: nickname
- **Values**: listId, name, description, emoji, color, createdAt, updatedAt

## 🔌 Synchronization Flow

```
User (Clerk) → ShoppingListsStore → ShoppingListStore → Products/Collaborators
```

1. User authenticates via Clerk → userId generated
2. ShoppingListsStore created: `shoppingListsStore-{userId}`
3. New shopping list → entry in `ShoppingListsStore.lists`
4. Dedicated ShoppingListStore created: `shoppingListStore-{listId}`
5. Products stored in `ShoppingListStore.products`
6. All changes synced via TinyBase WebSocket to Cloudflare Workers
7. Cross-device sync via same userId

## 📱 Platform Support

### Development
```bash
# Start development server
bun start

# Access via:
# • Web: http://localhost:8081
# • Mobile: Scan QR code with Expo Go
```

### Production Deployment

#### Frontend (WebView/WebBuild)
```bash
cd client
bun run deploy
```

#### Backend (Cloudflare Workers)
```bash
cd server
bun run deploy
```

## 🧪 Testing

### Automated QA Tests
```bash
cd client
node ../working-qa-test.js
```

### Manual Testing
1. **Cross-Device Sync**: Use same user account on different devices
2. **Real-time Updates**: Add items on one device, check others
3. **Collaboration**: Share lists with other users

## 🚨常见问题排查

### Sync Issues
```javascript
// Browser console debugging
window.debugTinyBaseSync();
```

**Common Causes:**
- Different user accounts on devices
- Network connectivity issues
- Invalid Clerk credentials

### Server Connectivity
```bash
# Test server endpoint
curl https://server.mutiaranizahram.workers.dev/

# Test WebSocket
wscat -c wss://server.mutiaranizahram.workers.dev/test
```

## 📊 Architecture Overview

### Frontend (Client)
- **Framework**: Expo React Native + TypeScript
- **State Management**: TinyBase with React Hooks
- **Authentication**: Clerk Expo SDK
- **Persistence**: Local-first with WebStorage
- **Synchronization**: TinyBase WebSocket client

### Backend (Server)
- **Runtime**: Cloudflare Workers
- **Database**: TinyBase with Durable Objects
- **Protocol**: WebSocket server
- **Synchronization**: TinyBase WebSocket server

### Data Flow
1. **Local First**: Data stored locally first
2. **Background Sync**: Changes synced via WebSocket
3. **Offline Support**: App works offline, syncs when online
4. **Cross-Device**: Same userId across devices enables sync

## 🔧 Development Commands

```bash
# Main development
bun start                    # Start both client & server

# Client only
cd client && bun x expo start

# Server only  
cd server && bun dev

# Build for production
cd client && bun run build

# Deploy server
cd server && bun run deploy
```

## 🛡️ Security Considerations

- **Authentication**: Clerk handles user authentication
- **Data Isolation**: Each user gets isolated store
- **WebSocket Security**: WSS (secure WebSocket) required
- **API Keys**: Stored in environment variables, never committed

## 📈 Performance Metrics

- **HTTP Response**: ~89ms
- **WebSocket Connection**: ~950ms
- **Local Operations**: <10ms
- **Sync Latency**: <2 seconds

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make your changes
4. Add tests if applicable
5. Submit pull request

## 📞 Support

For issues and questions:
1. Check the [issues page](https://github.com/termaulmaul/groceries-shopping-list-app/issues)
2. Review the troubleshooting section above
3. Copy relevant debug output from browser console

---

**Happy Shopping! 🛒**
