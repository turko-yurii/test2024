document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        alert(`Дякуємо за ваше замовлення, ${name}! Ми зателефонуємо вам за номером ${phone} для підтвердження.`);
        // Тут можна додати код для надсилання даних на сервер або в базу даних
        document.getElementById('orderForm').reset();
    } else {
        alert('Будь ласка, заповніть усі поля.');
    }
});
