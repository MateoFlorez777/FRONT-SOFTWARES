export const handleCheckout = async (amount: number) => {
  try {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      alert("Debes iniciar sesión para continuar con el pago.");
      return;
    }

    const formattedAmount = amount.toFixed(2);

    const response = await fetch(`http://localhost:5454/api/paypal/pay?amount=${formattedAmount}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error HTTP: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    if (data.redirect_url) {
      window.location.href = data.redirect_url;
    } else {
      alert("Error: No se encontró el enlace de redirección.");
    }
  } catch (error) {
    console.error("Error en handleCheckout:", error);
    alert("Error al iniciar el pago con PayPal.");
  }
};
