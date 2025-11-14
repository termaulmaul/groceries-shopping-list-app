![App Banner](https://cwb-video-demos.s3.us-east-2.amazonaws.com/general/banner+for+repo.png)

# Local-First Shopping List App

A cross-platform shopping list application built with modern technologies that enables real-time synchronization while maintaining local-first functionality.

🔍 Explore more innovative projects and tutorials at [codewithbeto.dev/projects](https://codewithbeto.dev/projects)

## 🚀 Video, Demo & Links

  <a href="https://youtu.be/HqOiB2tDM8Q">
    <img src="https://i.ytimg.com/vi_webp/HqOiB2tDM8Q/maxresdefault.webp" height="380" alt="YouTube Video Preview">
  </a>

- 📱 [iOS App Store](https://apps.apple.com/us/app/shopping-list-sync-share/id6739513017)
- 🌐 [Web Demo](https://quicksynclist.com/)
- 💻 [Project Details](https://codewithbeto.dev/projects/shopping-list-app)
- 📺 [Video Tutorial](https://youtu.be/HqOiB2tDM8Q)

## ⚡ Tech Stack

- [Expo](https://expo.dev/) - React Native framework
- [TinyBase](https://tinybase.org/) - Local-first database
- [Clerk](https://clerk.dev/) - Authentication & user management
- [Cloudflare](https://cloudflare.com/) - Edge computing & hosting

## 🛠️ Setup & Installation

### 🚀 Quick Start (For Team Members)

**No configuration needed!** All authentication credentials are pre-configured.

1. **Clone repository:**
   ```bash
   git clone https://github.com/termaulmaul/groceries-shopping-list-app.git
   cd groceries-shopping-list-app
   ```

2. **Install dependencies:**
   ```bash
   # Choose your preferred package manager
   bun install    # Fastest option
   npm install     # Most common
   yarn start      # Alternative
   ```

3. **Start application:**
   ```bash
   bun start
   # Or: npm start / yarn start
   ```

4. **Access your app:**
   - 🌐 **Web**: http://localhost:8081
   - 📱 **Mobile**: Scan QR code from browser
   - 🔗 **Server**: Check console for Cloudflare server URL

✅ **That's it!** All features are working out of the box!

---

### ⚙️ Developer Setup (For Contributors)

#### Client Setup (Expo)

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Environment variables are pre-configured in the repository:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<production_key_available_in_repo>
   EXPO_PUBLIC_SYNC_SERVER_URL=wss://server.mutiaranizahram.workers.dev/
   ```

4. Start the development server:
   ```bash
   npx expo start --port 8081
   ```
   The app can be run on iOS, Android or Web using Expo Go.

#### Server Setup (Synchronization)

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start local development server:
   ```bash
   bun dev
   ```

4. Deploy to Cloudflare Workers:
   ```bash
   bun run deploy
   ```

---

### 🛡️ Environment Configuration

#### Production Credentials (Pre-configured)

The repository includes working credentials for immediate development:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=<available_in_repository_files>
EXPO_PUBLIC_SYNC_SERVER_URL=wss://server.mutiaranizahram.workers.dev/
```

📋 **Note**: Credentials are included in the repository files for immediate team development.

#### Environment Files

- **`client/.env.example`** - Template with working credentials
- **`client/.env.working`** - Quick setup file with production keys
- **`client/.env`** - Active configuration file

#### Package Manager Support

All major package managers are supported:

```bash
# Installation
bun install      # Fastest (recommended)
npm install      # Most compatible
yarn             # Popular alternative

# Development
bun start         # All start on same port
npm start
yarn start

# Package Manager Specific Scripts
bun run setup:bun
npm run setup:npm
yarn run setup:yarn
```

---

### 📱 Multiple Device Development

#### Cross-Device Synchronization Setup

To test cross-device synchronization:

1. **Use Same Email Account**
   - Sign in with identical email on all devices
   - Ensure consistent user ID for synchronization

2. **Development Setup**
   ```bash
   Device 1: yarn start  # Runs on localhost:8081
   Device 2: Access Device 1's web interface via mobile
   ```

3. **Testing Steps**
   - Create shopping list on Device 1
   - Check Device 2 within 2-3 seconds
   - Add items on Device 2, verify on Device 1
   - Test real-time collaboration

#### Development Tools

The app includes comprehensive debugging tools:

```javascript
// Browser Console Debugging
window.testSync()           // Manual sync test
window.checkSyncStatus()     // Connection status
window.fullSyncTest()        // Full test suite
```

---

## 🖥️ Remote Team Setup

### Repository Access

1. **Clone Repository**
   ```bash
   git clone https://github.com/termaulmaul/groceries-shopping-list-app.git
   ```

2. **Choose Package Manager**
   - **Bun**: Fastest, modern JavaScript runtime
   - **NPM**: Most common, widely supported
   - **Yarn**: Popular alternative for dependency management

3. **Single Command Start**
   ```bash
   # Works for any package manager
   bun start
   # All features immediately available
   ```

### Team Collaboration Features

#### Real-Time Collaboration
- **Multiple Users**: Edit lists simultaneously
- **Instant Updates**: Changes sync across devices
- **Conflict Resolution**: Built-in merge handling
- **Offline Support**: Works offline, syncs when online

#### Development Environments
- **Web Development**: Chrome DevTools debugging
- **Mobile Testing**: Expo Go or development build
- **Cross-Platform**: iOS, Android, Web compatibility
- **Package Manager Flexibility**: No PM restrictions

#### Access Control
- **Clerk Authentication**: Secure user management
- **User Isolation**: Data separated by user account
- **Production Server**: Cloudflare Workers ready
- **Local Development**: Full offline capability

---

## 📋 Development Environment

### Prerequisites

- **Node.js** 18.0.0 or higher
- **Package Manager**: Bun 1.0.0+, NPM 8.0.0+, or Yarn 1.22.0+
- **Optional**: Expo CLI for advanced mobile development

### Development Workflow

1. **Initial Setup**
   ```bash
   git clone <repository-url>
   cd groceries-shopping-list-app
   <package-manager> install
   <package-manager> start
   ```

2. **Development Cycle**
   - Code changes automatically hot-reload
   - Cross-device sync testing in real-time
   - Browser DevTools for debugging
   - Mobile testing via Expo Go

3. **Testing Features**
   - Create shopping lists across devices
   - Test real-time collaboration
   - Verify authentication flows
   - Validate server synchronization

### Package Manager Scripts Reference

| Command | Description |
|---------|-------------|
| `bun start` | Start client & server (default port:8081) |
| `bun run setup:bun` | Clean install + start (Bun specific) |
| `npm run setup:npm` | Clean install + start (NPM specific) |
| `yarn run setup:yarn` | Clean install + start (Yarn specific) |
| `bun run kill-ports` | Clean up port conflicts |
| `bun run clean` | Remove all node_modules and lock files |

---

### 🔧 Advanced Configuration

For custom setup, modify `client/.env`:

```env
# Custom Clerk Configuration
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_custom_key_here
EXPO_PUBLIC_SYNC_SERVER_URL=wss://your-custom-server.workers.dev/

# Development Options
EXPO_PUBLIC_DEBUG_MODE=true
EXPO_PUBLIC_LOG_LEVEL=debug
```

📋 **Remember**: Share any custom configuration with your team members!
