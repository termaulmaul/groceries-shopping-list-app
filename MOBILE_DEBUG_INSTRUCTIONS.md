# 📱 Mobile Sync Debug Instructions

## 🔧 Step-by-Step Debugging

### 1. Verify You're Using Same Account
**Web Browser:**
1. Open app in browser
2. Check signed-in email in top-right profile
3. Note the email address

**Mobile Phone:**
1. Open app
2. Go to Profile tab
3. Verify same email address is signed in
4. ⚠️ BOTH DEVICES MUST USE SAME EMAIL

### 2. Check Network Connectivity

**Mobile Network Test:**
1. Open browser on phone
2. Go to: `https://server.mutiaranizahram.workers.dev/`
3. Should see: "✅ TinyBase WebSocket Worker aktif!"
4. If not, check internet connection

**Mobile Debug Mode:**
1. Open Expo Go app
2. In your app, shake device hard
3. Tap **"Debug"** or **"Open in Browser"**
4. This opens DevTools web inspector
5. Check Console tab for WebSocket messages

### 3. Browser Console Debug

**Open Chrome DevTools (F12) and paste:**
```javascript
// Check sync status
window.testSync();
```

**Alternative Debug Script:**
```javascript
// Check user and connection
if (window.Clerk) {
  window.Clerk.user?.then(user => {
    console.log('User ID:', user?.id);
    console.log('Store ID: shoppingListsStore-' + user?.id);
    console.log('Email:', user?.primaryEmailAddress?.emailAddress);
  });
}

// Test WebSocket
new WebSocket('wss://server.mutiaranizahram.workers.dev/shoppingListsStore-test').onopen = () => console.log('✅ WebSocket OK');
```

### 4. Manual Sync Test

**Step 1 - Web:**
1. In browser console, run `window.testSync()`
2. Should create "Browser Test List" 

**Step 2 - Mobile:**
1. Check if "Browser Test List" appears in mobile app
2. Should appear within 2-3 seconds

**Step 3 - Reverse Test:**
1. On mobile, create "Mobile Test List"
2. In browser console, check if it appears

### 5. Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| ❌ Lists not appearing | 🔐 Check same email on both devices |
| ❌ "Connection failed" | 📱 Check mobile internet connection |
| ❌ WebSocket errors | 🌐 Try different WiFi/turn off VPN |
| ❌ Different store IDs | 🔄 Sign out and sign back in with same email |
| ❌ Clerk auth error | 🗑️ Clear browser cache, re-login |

### 6. Advanced Debugging

**Browser Network Tab:**
1. Open DevTools → Network tab
2. Filter by WS (WebSocket)  
3. Look for connection to `wss://server.mutiaranizahram.workers.dev/`
4. Check for green dots (successful connection)
5. Click to inspect WebSocket frames

**Mobile Console Logs:**
1. In Expo Go debug mode
2. Look for messages like:
   - "✅ WebSocket connection established"
   - "🔄 Synchronization started"
   - "❌ WebSocket connection failed"

**Store ID Verification:**
Both devices should have SAME store ID pattern:
```
shoppingListsStore-{same_user_id_here}
```

### 7. Final Checklist

Before reporting issues, confirm:
- [ ] Same email address on both devices ✅
- [ ] Mobile has internet connection ✅
- [ ] No firewall/VPN blocking WebSocket ✅
- [ ] Browser can access server.mutiaranizahram.workers.dev ✅
- [ ] Both devices show "online" status ✅
- [ ] Clerk authentication working on both ✅

If all checked and still not working:
1. **Share console errors** from both devices
2. **Share network tab screenshot** showing WebSocket connections
3. **Share user ID** from console log (confirm it's same)
4. **Test with different internet connection**

---

## 🚀 Quick Test Script

**Copy-paste this in browser console:**
```javascript
// Full sync test
async function fullSyncTest() {
  console.log('🧪 Starting full sync test...');
  
  // 1. Check user
  const user = await window.Clerk?.user;
  if (!user) return console.error('❌ Not logged in');
  
  console.log('👤 User:', user.email);
  console.log('🆔 User ID:', user.id);
  console.log('🗄️ Store ID: shoppingListsStore-' + user.id);
  
  // 2. Test WebSocket
  const ws = new WebSocket('wss://server.mutiaranizahram.workers.dev/shoppingListsStore-' + user.id);
  
  ws.onopen = () => {
    console.log('✅ WebSocket connected!');
    
    // 3. Send test data
    const testList = {
      type: 'sync',
      data: {
        tables: {
          lists: {
            ['test-' + Date.now()]: {
              id: 'test-' + Date.now(),
              valuesCopy: JSON.stringify({
                id: 'test-' + Date.now(),
                name: '🧪 Debug Test List',
                description: 'Created at ' + new Date().toLocaleTimeString(),
                emoji: '🔧', 
                color: '#FF0000',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
              })
            }
          }
        }
      }
    };
    
    ws.send(JSON.stringify(testList));
    console.log('📤 Test list sent! Check your phone now!');
    
    setTimeout(() => {
      console.log('🔌 Closing test connection');
      ws.close();
    }, 5000);
  };
  
  ws.onerror = (e) => console.error('❌ WebSocket failed:', e);
}

fullSyncTest();
```

Run this script, then immediately check your phone. Test should create a red "Debug Test List" that appears on mobile within 2-3 seconds if sync is working!
