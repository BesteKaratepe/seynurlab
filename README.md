# Seynur Lab projesini ayağa kaldırma

1.Seynurlab projesini klonlayalım.
   
   ```bash
   git clone <proje-repo-url>    
   ```
   
2.Projeyi klonladıktan sonra, kullandığımız kod editöründe hem frontend hem de backend klasörlerini açalım.

3.Frontend ve backend için gerekli paketleri yükleyelim.

   ```bash
npm install 
   ```

4.Backend için .env dosyamızı oluşturalım ve içeriğini aşağıdaki gibi ayarlayalım.

Not: backend klasörü içerisine

  ```env
PORT=5000
JWT_SECRET=your_key
JWT_EXP='500s'  # Bu süre isteğe bağlı olarak değiştirilebilir.
  ```

5.Frontend'i başlatmak için aşağıdaki komutu çalıştıralım.

   ```bash
npm start
   ```
   
6.Backend'i başlatmak için ise aşağıdaki komutlardan birini kullanabiliriz.

   ```bash
npm run debug  # DebugMode
# veya
node main.js
   ```


7.Artık kayıt olup giriş yapabiliriz.