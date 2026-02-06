const toastBtn = document.getElementById("toastBtn");
const toastEl = document.getElementById("wishlistToast");
const wishlistConfirmBtn = document.getElementById("wishlistConfirmBtn");

let toastInstance = null;
if (toastEl) toastInstance = new bootstrap.Toast(toastEl);

function showWishlistToast(){
  if (toastInstance) toastInstance.show();
}

if (toastBtn) toastBtn.addEventListener("click", showWishlistToast);
if (wishlistConfirmBtn) wishlistConfirmBtn.addEventListener("click", showWishlistToast);
