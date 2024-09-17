export const handlePurchase = async (productId: number, productTitle: string, productPrice: number, quantity: number) => {
  try {
    // Log dos dados que estão sendo enviados para a API
    console.log("Dados enviados para a API:", {
      product_id: productId,
      product_title: productTitle,
      product_price: productPrice,
      quantity,
    });

    const response = await fetch('http://127.0.0.1:8000/api/v1/comprar/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: productId,
        quantity: quantity,
        product_title: productTitle,
        product_price: productPrice
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Resposta da API:", data);  // Log da resposta da API em caso de sucesso
      alert(`Compra realizada com sucesso! ID do pedido: ${data.id}, Valor total: ${data.total_price}`);
    } else {
      const errorData = await response.json();
      console.error("Erro na resposta da API:", errorData);  // Log do erro recebido da API
      alert('Erro ao realizar a compra.');
    }
  } catch (error) {
    console.error('Erro na requisição:', error);  // Log de qualquer erro na requisição (ex. erro de rede)
    alert('Erro ao realizar a compra.');
  }
};
