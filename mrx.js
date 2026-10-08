async function showKey() {
    document.getElementById('bar').style.display = 'none';
    document.getElementById('msg').innerText = "جاري جلب المفتاح...";
    
    var keyBox = document.getElementById('final-key');
    var copyBtn = document.getElementById('copyBtn');
    var link = document.getElementById('linkInput').value;

    try {
        // هنا يتم إرسال طلب إلى الرابط الموجود في الخانة للحصول على المفتاح
        const response = await fetch(link); 
        const data = await response.text(); // أو response.json() إذا كان الرد بتنسيق JSON

        keyBox.style.display = 'block';
        keyBox.innerText = data; // وضع المفتاح الحقيقي المستلم من الرابط هنا
        copyBtn.style.display = 'inline-block';
        document.getElementById('msg').innerText = "تم استخراج المفتاح بنجاح!";
    } catch (error) {
        document.getElementById('msg').innerText = "خطأ في جلب المفتاح!";
        console.error("Error:", error);
    }
}
