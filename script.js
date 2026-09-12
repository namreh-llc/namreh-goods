// ============================================================
// Namreh Goods — site behavior + tracking hook points
//
// This file intentionally has NO tracking code yet (Stage 0).
// Each stage of the learning plan adds code at the marked spots below.
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Buy Now buttons -------------------------------------------------
  var buyButtons = document.querySelectorAll('.buy-btn');

  buyButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var productName = btn.getAttribute('data-product-name');
      var productPrice = btn.getAttribute('data-product-price');

      // --------------------------------------------------------------
      // STAGE 1 (Google Tag): fire a manual gtag('event', 'buy_now_click', {...})
      //   call right here, before the redirect below.
      //
      // STAGE 2 (GTM): once you install GTM, DELETE this comment's job —
      //   instead, set up a GTM Click Trigger on elements matching
      //   ".buy-btn" and build the tag entirely in GTM's UI. You should
      //   NOT need to add tracking code here anymore after Stage 2.
      // --------------------------------------------------------------

      // Pass order details to the thank-you page via query string,
      // simulating a simple checkout. A real store would do this
      // server-side; this is just enough for the tracking exercise.
      var params = new URLSearchParams({
        product: productName,
        price: productPrice,
        transaction_id: crypto.randomUUID()
      });

      window.location.href = 'thank-you.html?' + params.toString();
    });
  });

  // ---- Scroll depth (used in Stage 2 as a GTM-only exercise) -----------
  // No JS needed here — build this entirely as a GTM Scroll Depth trigger.
  // This comment is just a reminder of where that trigger's "why" lives.

  // ---- Contact form ------------------------------------------------------
  // Stage 0-4: this form submits as a plain mailto: — no JS needed.
  //
  // STAGE 5 (ECL): replace the mailto action with a fetch() call to a
  // Google Sheet (via Sheets API or a service like SheetDB/Apps Script
  // Web App) so submissions land in your fake CRM automatically instead
  // of you copy-pasting emails by hand.
  //
  // GCLID: a real ad click lands on your site with a ?gclid=... URL param.
  //   You'll need to capture and persist that yourself (it disappears on
  //   navigation otherwise) so it can ride along with whatever becomes a
  //   CRM record here. Google's guidance: GCLID is valid ~90 days, and
  //   match rates are best when GCLID + hashed email are sent together,
  //   not hashed data alone.

});

// ============================================================
// thank-you.html support: read order details from the query string
// and render them. Also the natural home for Stage 1/5 conversion code.
// ============================================================
(function () {
  var summaryEl = document.getElementById('order-summary');
  if (!summaryEl) return; // not on thank-you.html

  var params = new URLSearchParams(window.location.search);
  var product = params.get('product');
  var price = params.get('price');
  var transaction_id = params.get('transaction_id');  

  if (product && price) {
    summaryEl.textContent = 'Thanks for your order — ' + product + ' ($' + price + ').';
    gtag('event', 'conversion', {
      'send_to': 'AW-18326775426/E09TCL7K2fUcEILN8aJE',
      'value': parseFloat(price),
      'currency': 'USD',
      'transaction_id': transaction_id || ''
      // 'new_customer': true /* calculate dynamically, populate with true/false */,
    });
  }

  // --------------------------------------------------------------
  // STAGE 1 (Google Tag): fire your Google Ads conversion event here,
  //   e.g. gtag('event', 'conversion', { send_to: 'AW-XXXXXXX/XXXX', value: price, currency: 'USD' })
  //
  // STAGE 5 (ECW): attach hashed user-provided data (email) to the
  //   conversion here — you'll need a real email field in a real
  //   checkout flow; for this exercise, add a hidden test email
  //   variable and hash it client-side to see the mechanics.
  // --------------------------------------------------------------
})();
