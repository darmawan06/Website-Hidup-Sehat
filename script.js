/* nameImageSlide = array yang berisi nama nama gambar untuk di pakai di slider
/* indexImageSlide = index untuk array dari variabel nameImageSlider*/
let indexImageSlider = 0;
let nameImageSlider = ["Gambar1.jpg","Gambar2.jpg","Gambar3.jpg"]


// function dari changePictureLeft adalah berubah gambar ke kiri dengan mengurangi value indexImageSlider agar gambar kembali ke sebelumnya
var changePictureLeft = ()=>{
	let check = document.getElementById('pictures');
	// mengambil model/node/element dengan id picture
	indexImageSlider--;
	// indexImageSlide berkurang
	if (indexImageSlider >= 0) {
		// indexImageSlider tidak boleh kurang dari 0
		let showPicture = check.childNodes[1].setAttribute('src',`Assert/${nameImageSlider[indexImageSlider]}`);
		// variabel check childNodes[1](showPicture) di set attributenya sesuai isi dari nameImageSlider dengan indexImageSlider
	}else{
		// jika indexImageSlide kurang dari 0 maka indexImageSlider di rubah nilai nya dari panjang Array nameImageSlider
		indexImageSlider = nameImageSlider.length-1;
		let showPicture = check.childNodes[1].setAttribute('src',`Assert/${nameImageSlider[indexImageSlider]}`);
	}
	console.log(indexImageSlider);
}

// function dari changePictureRight adalah berubah gambar ke kanan dengan bertambah value indexImageSlider agar gambar melanjutkan gambar
var changePictureRight = ()=>{
	let check = document.getElementById('pictures');
	// mengambil model/node/element dengan id picture
	indexImageSlider++;
	// indexImageSlide bertambah
	if (indexImageSlider != nameImageSlider.length) {
		// indexImageSlider tidak boleh lebih dari panjang array nameImageSlider
		let showPicture = check.childNodes[1].setAttribute('src',`Assert/${nameImageSlider[indexImageSlider]}`);
		// variabel check childNodes[1](showPicture) di set attributenya sesuai isi dari nameImageSlider dengan indexImageSlider
	}else{
		// jika indexImageSlide lebih dari panjjang array nameImageSlider maka IndexImageSlide rubah menjadi 0
		indexImageSlider = 0;
		let showPicture = check.childNodes[1].setAttribute('src',`Assert/${nameImageSlider[indexImageSlider]}`);
	}
	console.log(indexImageSlider)
}


// menambahkan eventListener click untuk button left dan right
document.getElementById('changeLeft').addEventListener('click',changePictureLeft);
document.getElementById('changeRight').addEventListener('click',changePictureRight);

// variabel descriptionTipsHidupSehat berupa array yang memiliki value untuk bagian 12 tips hidup sehat

let descriptionTipsHidupSehat = ["Lakukan Aktifitas Fisik Setiap Hari", "Diet Seimbang", "Periksa Kesehatan Secara Rutin", "Berikan Bayi Anda ASI Eksklusif", "Seks Yang Aman", "Kelola Stress",
"Gunakan Sabuk Pengaman Ketika Berkendara dan Helm Saat Bermotor", "Jangan Berkendara Dalam Pengaruh Obat Dan Minuman Keras", "Biasakan Hidup Bersih dan Sehat",
"IMUNISASI", "Tidak Merokok", "Hindari Minuman Keras"];

let v12HidupSehat = document.getElementById("tipsAndTrick").childNodes;
// mengambil element tipsAndTrick dan semua anak nodes

// pengulangan sebanyak panjang dari variabel descriptionTipsHidupSehat
for (var i = descriptionTipsHidupSehat.length - 1; i >= 0; i--) {
	// membuat Element 
	const createElement = document.createElement("div");
	createElement.className = 'item';
	const node = document.createTextNode(descriptionTipsHidupSehat[i]);
	createElement.appendChild(node);
	// Buat element div lalu dengan class item lalu dengan isi text sesuai dari variabel descriptionTipsHidupSehat[i]
	// lalu hasil element yang di buat di tambahkan ke variabel v12HidupSehat[3](nav)
	v12HidupSehat[3].appendChild(createElement);	
	
}


// Variabel yang berisi biodata dokter
let bioDoctors = [{
	img : '1.jpg',
	name : 'Renata Kusina',
	age : 22,
	gender : "Perempuan"
},{
	img : '2.jpg',
	name : 'Dewi Ratna',
	age : 24,
	gender : "Perempuan"
},{
	img : '3.jpg',
	name : 'Crisna Putri',
	age : 21,
	gender : "Perempuan"
},{
	img : '4.jpg',
	name : 'Budi Setiawan',
	age : 26,
	gender : "Laki-Laki"
},{
	img : '5.jpg',
	name : 'Rico Valentino',
	age : 24,
	gender : "Laki-Laki"
},{
	img : '6.jpg',
	name : 'Pogba Valentino',
	age : 23,
	gender : "Laki-Laki"
},{
	img : '7.jpg',
	name : 'Rinbinton',
	age : 27,
	gender : "Laki-Laki"
}];

// proses ini sama seperti 12 tips Hidup Sehat
let doctor = document.getElementById("doctor").childNodes;
for (var i = bioDoctors.length - 1; i >= 0; i--) {
	const createElement = document.createElement('div');
	const createElementImg = document.createElement('img');
	const createElementAside = document.createElement('aside');
	const createElementDiv1 = document.createElement('div');
	const createElementDiv2 = document.createElement('div');
	const createElementDiv3 = document.createElement('div');
	const createElementButton = document.createElement('button');
	createElementButton.className = 'btn';
	createElementDiv1.appendChild(document.createTextNode(`Nama : ${bioDoctors[i].name}`)); 
	createElementDiv2.appendChild(document.createTextNode(`Umur : ${bioDoctors[i].age}`)); 
	createElementDiv3.appendChild(document.createTextNode(`Jenis Kelamin : ${bioDoctors[i].gender}`));
	createElementButton.appendChild(document.createTextNode('Contact'));
	createElementImg.setAttribute('src',`Assert/Doctor/${bioDoctors[i].img}`);
	createElement.className = 'card';
	createElementAside.appendChild(createElementDiv1);
	createElementAside.appendChild(createElementDiv2);
	createElementAside.appendChild(createElementDiv3);
	createElement.appendChild(createElementImg);
	createElement.appendChild(createElementAside);
	createElement.appendChild(createElementButton);
	doctor[3].appendChild(createElement);
}
// mengambil element cariDocter
let inputSearchDoctor = document.getElementById('cariDocter')

// event keyup untuk element caridocter
inputSearchDoctor.addEventListener('keyup',()=>{
	console.log(inputSearchDoctor.value);
	// ambil semua child yang bernama class 'card;
	const items = doctor[3].getElementsByClassName('card');
	// lalu loop 
	for (var i = items.length - 1; i >= 0; i--) {
		const getValueName = items[i].childNodes[1].childNodes[0].innerText;
		// ambil nama dari setiap card 
		if(getValueName.toUpperCase().indexOf(inputSearchDoctor.value.toUpperCase()) > -1){
			// jika nama card tersebut dan value input search 1 kata sama maka tampilkan card tersebut
			items[i].style.display = 'flex';
		}else{
			// jika tidak maka hilangkan
			items[i].style.display = 'none';
		}
	}
})

