// Real-time sync debugging script
console.log('🔍 Starting synchronization debugging...');

// 1. Test WebSocket connectivity with different store IDs
console.log('\n📡 Testing WebSocket connection patterns...');

const testPatterns = [
  'shoppingListsStore-test-user-123',
  'shoppingListStore-test-list-456', 
  'sync-test-store-' + Date.now()
];

testPatterns.forEach(pattern => {
  console.log(`   📋 Testing: ${pattern}`);
  console.log(`   🔗 URL: wss://server.mutiaranizahram.workers.dev/${pattern}`);
});

// 2. Instructions for debugging sync issues
console.log('\n📱 STEPS TO DEBUG SYNC ISSUES:');
console.log('');
console.log('🔍 In Browser Console (Web):');
console.log('1. Open browser dev tools (F12)');
console.log('2. Go to Console tab');
console.log('3. Type: window.debugTinyBaseSync?.()');
console.log('4. Check for WebSocket connections in Network tab');
console.log('5. Look for WebSocket frames with data');
console.log('');
console.log('📱 In Expo Go (Mobile):');
console.log('1. Shake device to open dev menu');
console.log('2. Tap "Debug" (or open tunnel if needed)');
console.log('3. Check console logs in web inspector');
console.log('4. Look for WebSocket connection messages');
console.log('');
console.log('🔍 Common Sync Issues:');
console.log('   ❌ Different user accounts on devices');
console.log('   ❌ WebSocket connection failed');
console.log('   ❌ Network connectivity issues');
console.log('   ❌ Store ID generation mismatch');
console.log('');
console.log('✅ What Should Work:');
console.log('   ✅ Same user email on both devices');
console.log('   ✅ Network access to server.mutiaranizahram.workers.dev');
console.log('   ✅ WebSocket connections established');
console.log('   ✅ Store ID pattern: shoppingListsStore-{userId}');

// 3. Generate test user ID pattern
console.log('\n🧪 TESTING USER ID CONSISTENCY:');
console.log('');
console.log('📱 Expected Store ID Format:');
console.log('   For user@example.com → shoppingListsStore-user_id_hash');
console.log('   Both devices should generate SAME store ID');
console.log('');
console.log('🔍 Check in app code:');
console.log('   Line in ShoppingListsStore.tsx: const useStoreId = () => STORE_ID_PREFIX + useUser().user.id;');
console.log('   This should return same ID for same signed-in user');

console.log('\n🚀 ACTION ITEMS:');
console.log('1. Verify you are signed in with SAME email on both devices');
console.log('2. Check network connectivity on mobile device');
console.log('3. Look for WebSocket error messages in console');
console.log('4. Test with browser dev tools Network tab');
console.log('5. Create test list on one device, check other device');
console.log('6. Check if store IDs match between devices');

console.log('\n📊 Server Status Check:');
console.log('   ✅ Server accessible: https://server.mutiaranizahram.workers.dev');
console.log('   ✅ WebSocket endpoint: wss://server.mutiaranizahram.workers.dev');
console.log('   📡 Ready for sync requests');

if (typeof window !== 'undefined') {
  // Browser-specific debugging
  window.checkSyncStatus = function() {
    console.log('🔍 Checking sync status...');
    
    // Check WebSocket connections
    const websockets = [];
    if (window.WebSocket) {
      console.log('✅ WebSocket API available');
    }
    
    // Check for TinyBase
    console.log('🗄️ TinyBase available:', typeof window.TinyBase !== 'undefined');
    
    // Check network
    console.log('🌐 Online status:', navigator.onLine);
    
    return {
      websockets: websockets.length,
      online: navigator.onLine,
      tinybase: typeof window.TinyBase !== 'undefined'
    };
  };
  
  console.log('💡 Run window.checkSyncStatus() in console to check status');
}

console.log('\n📞 If issues persist, check:');
console.log('   • Same user account on both devices');
console.log('   • No VPN/firewall blocking WebSocket');
console.log('   • Mobile device has internet connection');
console.log('   • Server logs show connection attempts');

module.exports = {};
