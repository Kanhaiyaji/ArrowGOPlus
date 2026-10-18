package com.arrowpuzzle.arrowgoplus;

import android.accounts.AccountManager;
import android.app.Activity;
import android.content.Intent;
import androidx.activity.result.ActivityResult;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "NativeGoogleAuth")
public class NativeGoogleAuthPlugin extends Plugin {

    @PluginMethod
    public void chooseAccount(PluginCall call) {
        try {
            Intent intent = AccountManager.newChooseAccountIntent(
                null,
                null,
                new String[]{"com.google"},
                null,
                null,
                null,
                null
            );
            startActivityForResult(call, intent, "chooseAccountResult");
        } catch (Exception e) {
            call.reject("Failed to open Google account chooser: " + e.getMessage(), e);
        }
    }

    @ActivityCallback
    private void chooseAccountResult(PluginCall call, ActivityResult result) {
        if (call == null) return;

        if (result.getResultCode() == Activity.RESULT_OK && result.getData() != null) {
            Intent data = result.getData();
            String accountName = data.getStringExtra(AccountManager.KEY_ACCOUNT_NAME);
            String accountType = data.getStringExtra(AccountManager.KEY_ACCOUNT_TYPE);

            if (accountName == null || accountName.trim().isEmpty()) {
                call.reject("No account selected");
                return;
            }

            String displayName = accountName;
            if (accountName.contains("@")) {
                String prefix = accountName.split("@")[0];
                if (!prefix.isEmpty()) {
                    displayName = Character.toUpperCase(prefix.charAt(0)) + prefix.substring(1);
                }
            }

            JSObject ret = new JSObject();
            ret.put("email", accountName);
            ret.put("name", displayName);
            ret.put("accountType", accountType != null ? accountType : "com.google");
            call.resolve(ret);
        } else {
            call.reject("USER_CANCELLED");
        }
    }
}
