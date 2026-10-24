# Kimi draft auto-save

Keeps unsent text in the Kimi composer. After a pause in typing the text is
saved to this device; when you refresh the page or open the same conversation
again, it goes back into the composer, but only while the composer is empty, so
anything you already typed is never replaced. The restore does not move focus.
Sending the message drops its draft.

Drafts are keyed by conversation id (`/chat/<id>`). A page without a matching
conversation route (the new-chat page) shares one new-chat draft. Drafts live in
`chrome.storage.local` as `gvDraft:kimi:…`, at most five per site, and are
cleared from the popup's storage page together with Gemini drafts. They are not
backed up or synced.

The plugin uses the `draftSave` primitive with the adapter's `composer` and
`sendButton` semantic selectors and its `conversationIdPattern`. Turning it off
stops saving and restoring and keeps the drafts already saved.
