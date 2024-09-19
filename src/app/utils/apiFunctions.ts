export async function fetchPurchasedItems() {
    const res = await fetch('http://127.0.0.1:8000/api/v1/comprar/list/');
    if (!res.ok) {
      throw new Error('Failed to fetch purchased items');
    }
    return res.json();
  }
  
  export async function deletarItem(id: number) {
    const confirmDelete = window.confirm("Você tem certeza que deseja excluir este item?");
    if (confirmDelete) {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/v1/comprar/${id}/delete/`, {
          method: 'DELETE',
        });
        if (res.ok) {
          return true; // Retorna true se a exclusão for bem-sucedida
        } else {
          alert("Falha ao excluir o item.");
          return false;
        }
      } catch (error) {
        console.error("Erro ao tentar excluir o item:", error);
        alert("Erro ao excluir o item.");
        return false;
      }
    }
    return false;
  }

 
// Função para atualizar a quantidade de um item
export async function updateItemQuantity(id: number, newQuantity: number) {
    const res = await fetch(`http://127.0.0.1:8000/api/v1/comprar/${id}/update/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: newQuantity,
      }),
    });
    if (!res.ok) {
      throw new Error('Failed to update item quantity');
    }
    return res.json();
  }
  
  