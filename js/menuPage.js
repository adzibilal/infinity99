// Import the Menu array from dataMenu.js
import { Menu } from './dataMenu.js'
import { rupiahFormat } from './utils.js'

// Get the container where all menu items will be added
const allMenuContainer = document.getElementById('all-menu-items')

// Loop through all items in the Menu array and create HTML elements for each item
Menu.forEach(item => {
    const menuItem = document.createElement('div')
    menuItem.className =
        'item-menu shadow-md p-3 rounded-md border border-gray-100'

    // Create and set the image element
    const image = document.createElement('img')
    image.src = item.image
    image.alt = item.name
    image.className = 'w-full aspect-square object-cover lg:aspect-[4/3]'
    const imageContainer = document.createElement('div')
    imageContainer.className =
        'img-cover overflow-hidden aspect-square lg:aspect-[4/3] rounded-md'
    imageContainer.appendChild(image)

    // Create and set the category element
    const category = document.createElement('div')
    category.className =
        'text-emerald-900 bg-emerald-300/50 w-max px-3 rounded-sm mt-3'
    category.textContent = item.category

    // Create and set the name element
    const name = document.createElement('div')
    name.className = 'text-2xl text-left font-bold max-sm:text-lg'
    name.textContent = item.name

    // Create and set the price element
    const price = document.createElement('div')
    price.className = 'text-emerald-900 text-left font-bold'
    price.textContent = rupiahFormat(item.price)

    // Set the data-aos attributes
    menuItem.setAttribute('data-aos', 'fade-up')
    menuItem.setAttribute('data-aos-easing', 'ease-out-cubic')
    menuItem.setAttribute('data-aos-duration', '1000')

    // Append all elements to the menu item container
    menuItem.appendChild(imageContainer)
    menuItem.appendChild(category)
    menuItem.appendChild(name)
    menuItem.appendChild(price)

    // Add the menu item to the container
    allMenuContainer.appendChild(menuItem)
})

// Fungsi ini akan dijalankan ketika tombol "Kirim Pesan" diklik
function bukaWhatsApp() {
    // Ambil nilai dari inputan
    const namaLengkap = document.querySelector('#nama-lengkap').value
    const email = document.querySelector('#email').value
    const nomorWhatsapp = document.querySelector('#nomor-whatsapp').value
    const pesan = document.querySelector('#pesan').value

    const text = `Halo, saya ${namaLengkap}
Email: ${email}
Nomor WhatsApp: ${nomorWhatsapp}
-------------------------------------
Pesan: 
${pesan}`

    // Membuat URL WhatsApp dengan parameter yang dinamis
    const waURL = `https://api.whatsapp.com/send?phone=6281320969970&text=${encodeURIComponent(
        text
    )}`

    // Membuka jendela baru dengan URL WhatsApp
    window.open(waURL, '_blank')
}

// Menambahkan event listener ke tombol "Kirim Pesan"
document
    .querySelector('#kirim-pesan-button')
    .addEventListener('click', bukaWhatsApp)
