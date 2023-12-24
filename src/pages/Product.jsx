import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Header2 from '../components/Headers2'

function Product(){
    
    const [isVisible, setIsVisible] = useState(false);
    const animationClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';
    const [dataProduct, setDataProduct] = useState([]);
    const { userID } = useParams();

    useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 500);
    
        // Clear the timer to avoid any potential memory leaks
        return () => clearTimeout(timer);
    }, []); 

    useEffect(() => {

        async function fetchData(){
            
            // const response = await fetch('https://api.invitazion.com/kado-list-99');
            // const resData = await response.json();

            // const filteredData = resData[0].filter(item => item.pool == userID );
            // setDataProduct(filteredData);
            // console.log(filteredData);

            const newData = dataProducts.filter(item => item.pool == userID );
            setDataProduct(newData);   

            console.log(newData);

        }

        fetchData();

    },[])

    const [selectedItem, setSelectedItem] = useState(null);
    // const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    const items = [
        // { value: null, text: 'Pilih kategori', disabled: true },
        { value: 'pernikahan', text: 'Pernikahan' },
        // { value: 'sunatan', text: 'Sunatan' },
        { value: 'pasangan', text: 'Pasangan' },
        { value: 'orangtua', text: 'Orangtua' },
        { value: 'teman', text: 'Sahabat' },
        // { value: 'anniv', text: 'Anniversary' },
        { value: 'guru', text: 'Guru' },
        // { value: 'tetangga', text: 'Tetangga' },
      ];
    const [ dataProducts, setDataProducts] =  useState([
        {
          "title": "Buku Resep Masakan Makanan Po Sabar Manis Club Laris Bakulan Menu Istimewa Keluarga",
          "description": "Buku Resep Masakan Makanan Po Sabar Manis Club Laris Bakulan Menu Istimewa Keluarga",
          "price_text": "Rp99.000 - Rp112.500",
          "price": 99000,
          "thumbnail": "https://down-id.img.susercontent.com/file/4fee59e964ea4ac27385233914ab279b",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/7zlsOtIuHa",
          "terjual": "6,2RB+",
          "tag": "unik",
          "gender": "ibu",
          "pool": "orangtua"
        },
        {
          "title": "Alat Pijat Gun",
          "description": "HAN RIVER Alat pijat MASSAGE GUN - DEEP TISSUE MUSCLE MASSAGER GUN-HITAM",
          "price_text": "Rp195.000",
          "price": 195000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134601-7r98w-ln2vlh842w7j4f",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/7AClPo6MwL",
          "terjual": "14RB+",
          "tag": "unik",
          "gender": "ibu & ayah",
          "pool": "orangtua"
        },  
        {
          "title": "BUKU BELAJAR RESEP MASAK MASAKAN MAKAN MAKANAN HOME COOKING",
          "description": "BUKU BELAJAR RESEP MASAK MASAKAN MAKAN MAKANAN HOME COOKING",
          "price_text": "Rp112.530",
          "price": 112530,
          "thumbnail": "https://down-id.img.susercontent.com/file/7360bc96ebb8708bd665b6925dda128d",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/4AZ9prOMiK",
          "terjual": "6,2RB+",
          "tag": "unik",
          "gender": "ibu",
          "pool": "orangtua"
        },
        {
          "title": "Hampers Mangkok Set Japanese / Mangkok Japanese Bowl Set Mangkok Keramik",
          "description": "Hampers Mangkok Set Japanese / Mangkok Japanese Bowl Set Mangkok Keramik Mangkok Jepang Souvenir Mangkok Piring jaminan",
          "price_text": "Rp21.999",
          "price": 21999,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-7rbk0-lktcnfv4uts734",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/6KdeFEQjNH",
          "terjual": "300RB+",
          "tag": "unik",
          "gender": "ibu",
          "pool": "pernikahan"
        },
        {
          "title": "Hampers Japanese Bowl Set Piring Mangkok Keramik Mangkuk Jepang Souvenir",
          "description": "𝘼𝘾' INOKI Hampers Japanese Bowl Set Piring Mangkok Keramik Mangkuk Jepang Souvenir Suvenir GIft Box Wedding Bingkisan Hadiah",
          "price_text": "Rp24.500 - Rp99.800",
          "price": 24500,
          "thumbnail": "https://down-id.img.susercontent.com/file/d8bca8745576e29267e6a9688b24e73b",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/8f1Z1eRstI",
          "terjual": "3,6RB+",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "pernikahan"
        },
        {
          "title": "Blender Portable 4/6/8 Mata Pisau Juicer cup 380/380+380/410ml Usb jus",
          "description": "Ecentio Kaca blender Portable 4/6/8 mata pisau Juicer cup 380/380+380/410ml Usb jus",
          "price_text": "Rp125.000 - Rp145.000",
          "price": 125000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul7-lh71sz0u5jub5c",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/7ACl8tGT3g",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "pernikahan"
        },
        {
          "title": "Piyama Couple Rayon Twill Premium PP",
          "description": "Zavyn Setelan Piyama Couple Rayon Twill Premium PP",
          "price_text": "Rp92.000 - Rp230.000",
          "price": 92000,
          "thumbnail": "https://down-id.img.susercontent.com/file/505ec1a623b7a09048e1ffaa983b57d0",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/7f91q8f0Ms",
          "terjual": "1,4RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "title": "SAJADAH COUPLE TRAVEL PREMIUM BORDIR",
          "description": "SAJADAH COUPLE TRAVEL PREMIUM BORDIR TAZBIYA - GIFT SET KADO",
          "price_text": "Rp229.000 - Rp369.000",
          "price": 229000,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-23010-pq0qt0f8nxmvac",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/5V4XGO3fJW",
          "terjual": "50++",
          "tag": "unik",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "title": "Gift Set Handuk Couple",
          "description": "Hampers Kado Souvenir / Gift Set Box Handuk Jumbo 85x170cm / Handuk Couple Pasangan / Hampers Wedding Pernikahan / Paket Kado",
          "price_text": "Rp125.000 - Rp145.000",
          "price": 125000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lkynkme6dw8vb4",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/7KWBRtOOEi",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "pernikahan"
        },
        {
          "title": "Coffee Maker Mesin Pembuat Kopi Peralatan Minum Espresso Machine",
          "description": "Ace - Kris 125 Ml Coffee Maker Mesin Pembuat Kopi Peralatan Minum Espresso Machine",
          "price_text": "Rp149.000",
          "price": 149000,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-23010-sn5sy4peq6lv07",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/jaiayrBa",
          "terjual": "1,6RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "title": "Gelas keramik couple gaya Set kotak hadiah eropa utara gelas kopi mug",
          "description": "[HOT]Gelas keramik couple gaya Set kotak hadiah eropa utara gelas kopi mug hadiah pernikahan Mangkok Keramik",
          "price_text": "Rp74.900",
          "price": 74900,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul3-ljggidfsn5cf6e",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/jaiuQW7V",
          "terjual": "200+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "title": "Set Mug Couple Premium",
          "description": "[VALLA] CANGKIR MUG GELAS COUPLE PASANGAN SET MR MRS KERAMIK MARBLE HADIAH PERNIKAHAN WEDDING SET",
          "price_text": "Rp209.000",
          "price": 209000,
          "thumbnail": "https://down-id.img.susercontent.com/file/cac2046e4025bf2172aa20b4637dda0e",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/8zePRiuFvT",
          "terjual": "8+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "title": "Set Pisau 6 in 1 Premium",
          "description": "Stein Steincookware Pisau DIAMOND / NEOBLADE/ TITANIUM BLADE Knives Set 6 in 1 Pisau Dapu",
          "price_text": "Rp164.000 - Rp209.000",
          "price": 164000,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-23010-ka90a33dm7lv89",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/1AvY7fFasd",
          "terjual": "8RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "title": "Termos Coffee LED SUHU Stainless Steel 316 Cangkir Kopi Tumbler panas dan dingin gelas aesthetic",
          "description": "ecentio 420ml LED SUHU Termos coffee Stainless Steel 316 Cangkir Kopi Tumbler panas dan dingin gelas aesthetic",
          "price_text": "Rp118.000",
          "price": 118000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qukx-limg4dgq99cg13",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/9KHCsghI71",
          "terjual": "768+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "guru"
        },
        {
          "title": "Lunch Box Set/Bekal Makan Set Termos cangkir sup set Led Display 2 layer lunch box 1600ml+420ML Vacuum Cup tumbler Biru tua",
          "description": "Lunch Box Set/Bekal Makan Set Termos cangkir sup set Led Display 2 layer lunch Box 1600ml+420ML Vacuum Cup tumbler Biru Tua",
          "price_text": "Rp82.000 - Rp195.000",
          "price": 82000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul2-lk4z4faxqken49",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/VfrD7yfFI",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "guru"
        },
        {
          "title": "Pisau Set Lengkap / Pisau Dapur Set 7 in 1 Bahan Stainless Steel / Talenan / Great Ceramic Knife Set)",
          "description": "UPHOME Pisau set lengkap / Pisau Dapur Set 7 in 1 Bahan Stainless Steel / Talenan / Great Ceramic Knife Set(Warna talenan acak)",
          "price_text": "Rp65.000",
          "price": 65000,
          "thumbnail": "https://down-id.img.susercontent.com/file/c3aca00a0e3fc7f930f58e231fe0df1d",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/3fcszD6PH1",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "guru"
        },
        {
          "title": "Hampers Mukena Dewasa Premium Gift Box Mukenah Free Custom Giftcard",
          "description": "Hampers Mukena Dewasa Bahan Hyget Premium Gift Box Mukenah Hadiah Ulang Tahun Wedding Free Custom Giftcard",
          "price_text": "Rp65.000",
          "price": 65000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lnk2amy3u55572",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/8pKz948eHY",
          "terjual": "4,3RB+",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "guru"
        },
        {
          "title": "Mukena Mini Travel Parasut Korea",
          "description": "Mukena Mini Travel Parasut Korea",
          "price_text": "Rp. 112.000",
          "price": 112000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7r98o-ll1x5rdppaycfe",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/6AKDyJSQts",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "guru"
        },
        {
          "title": "JEPALO Pengharum Humidifier Air 130ML Aromaterapi Difuser Model Bulat Kecil Polos&Garis",
          "description": "JEPALO Pengharum Humidifier Air 130ML Aromaterapi Difuser Model Bulat Kecil Polos&Garis TANPA REMOTE (TIDAK FREE OIL / Air )",
          "price_text": "Rp. 48.000",
          "price": 48000,
          "thumbnail": "https://down-id.img.susercontent.com/file/81cea2ba0bb637ceb43ffc929f68238d",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/5Kl6z42P8X",
          "terjual": "100+",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "guru"
        },
        {
          "title": "Nokha Sepatu Sneakers Luxor Sage Wanita",
          "description": "Nokha Sepatu Sneakers Luxor Sage Wanita",
          "price_text": "Rp372.910 - Rp419.000",
          "price": 372910,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lngl78l01tkx0b",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/8f1Yxo9dC7h",
          "terjual": "-",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "guru"
        },
        {
          "title": "Nokha Sepatu Sneakers Namsan Brown Pria",
          "description": "Nokha Sepatu Sneakers Namsan Brown Pria",
          "price_text": "Rp390.710",
          "price": 390710,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134201-7qukz-lev58cesug7b90",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/8zePO4ODbM",
          "terjual": "-",
          "tag": "unik",
          "gender": "pria",
          "pool": "guru"
        },
        {
          "title": "Pembersih Pelembap Udara Aroma Terapi Mini USB Mobil Penyebar Aroma Minyak Esensial Lampu Led Pembuat Kabut Ultrasonik",
          "description": "220Ml Pembersih Pelembap Udara Aroma Terapi Mini USB Mobil Penyebar Aroma Minyak Esensial Lampu Led Pembuat Kabut Ultrasonik",
          "price_text": "Rp. 55.900",
          "price": 55900,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul0-lhrdzndw64ts3c",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/5fNxNml6nh",
          "terjual": "-",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "guru"
        },
        {
          "title": "BUKET BUNGA PALSU BUKET ARTIFICIAL BOUQUET ARTIFICIAL FLOWER FLORIST FLOWER BUCKET ",
          "description": "KIRANA TEDDY BOUQUET - BUKET BUNGA PALSU BUKET ARTIFICIAL BOUQUET ARTIFICIAL FLOWER FLORIST FLOWER BUCKET ",
          "price_text": "Rp95.000 - Rp99.000",
          "price": 95000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul7-lj01reghwxa323",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/9Uafy0cE0z",
          "terjual": "10+",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "guru"
        },
        {
          "title": "BUKET BUNGA PALSU BUKET ARTIFICIAL BOUQUET ARTIFICIAL FLOWER FLORIST FLOWER BUCKET ",
          "description": "KIRANA TEDDY BOUQUET - BUKET BUNGA PALSU BUKET ARTIFICIAL BOUQUET ARTIFICIAL FLOWER FLORIST FLOWER BUCKET ",
          "price_text": "Rp95.000 - Rp99.000",
          "price": 95000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul7-lj01reghwxa323",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/9Uafy0cE0z",
          "terjual": "10+",
          "tag": "unik",
          "gender": "ibu",
          "pool": "orangtua"
        },
        {
          "title": "Dompet Panjang Pria Wanita Kulit Asli",
          "description": "Dompet Panjang Pria Wanita Kulit Asli Dengan Sisipan Tengah - Dompet Kulit Panjang - Dompet Kulit - Dompet Pria Panjang",
          "price_text": "Rp140.000",
          "price": 140000,
          "thumbnail": "https://down-id.img.susercontent.com/file/e8975326d2377ce41df5d2dfd9d3126f",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/VfrFjCkrc",
          "terjual": "5+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "guru"
        },
        {
          "title": "Bodypack Seattle Rawk Laptop Backpack - Black",
          "description": "Bodypack Seattle Rawk Laptop Backpack - Black",
          "price_text": "Rp466.650",
          "price": 466650,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-23020-q5ji07kubanv9d",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/9UafySVNoC",
          "terjual": "400+",
          "tag": "unik",
          "gender": "pria",
          "pool": "guru"
        },
        {
          "title": "Bodypack Dexter 1.0 Backpack Tas Ransel Pria - Navya",
          "description": "Bodypack Dexter 1.0 Backpack Tas Ransel Pria - Navy",
          "price_text": "Rp261.750",
          "price": 261750,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qukx-ljc6j7jvo3fb50",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/5fNxPWL0pp",
          "terjual": "2+",
          "tag": "unik",
          "gender": "pria",
          "pool": "guru"
        },
        {
          "title": "SEPATU LARI ORTUSEIGHT HYPERBLAST NEO",
          "description": "SEPATU LARI ORTUSEIGHT HYPERBLAST NEO - SEPATU KEREN - SEPATU OLAHRAGA - SEPATU LIFESTYLE",
          "price_text": "Rp466.650",
          "price": 466650,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul6-ljsiy8gjcdgq89",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/6ztL0Y5nIn",
          "terjual": "2+",
          "tag": "unik",
          "gender": "pria",
          "pool": "guru"
        },
        {
          "title": "SEPATU LARI RUNNING ORIGINAL ORTUSEIGHT HYPERBLAST EVO 2.0",
          "description": "SEPATU LARI RUNNING ORIGINAL ORTUSEIGHT HYPERBLAST EVO 2.0 ~ HYPERGLIDE 1.3 ~ HYPERFUSE 1.3 NEW ARRIVAL 2023",
          "price_text": "Rp175.750",
          "price": 175750,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-7qve4-li14sw16q3zu03",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/4fVQEMPadl",
          "terjual": "2+",
          "tag": "unik",
          "gender": "pria",
          "pool": "guru"
        },
        
        {
          "title": "Parfum Viral Candu (Cantik dan lugu) | Fruity & sweet | Parfum Wanita",
          "description": "Hambel Parfum-For Candu (Cantik dan lugu) | Fruity & sweet | Parfum Wanita",
          "price_text": "Rp99.000 - Rp145.000",
          "price": 99000, 
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-7rblc-lnspz09w0ih89a",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/8KOijn4x7M",
          "terjual": "8,2RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "pasangan"
        },
        {
          "title": "Cangkir Tumbler Kopi Stainless Steel Ukuran 300ml & 600ml",
          "description": "BAKINDO Cangkir Tumbler Kopi Stainless Steel Ukuran 300ml & 600ml",
          "price_text": "Rp45.500",
          "price": 45500,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-22120-4lcnnhfl6kkv50",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/7pSP5mv2LA",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "pria",
          "pool": "pasangan"
        },
        
        {
          "title": "Rak Sepatu tingkat/ rak sepatu kokoh/tempat sepatu sendal besi/rak sepatu serbaguna",
          "description": "ALOBON Rak Sepatu tingkat/ rak sepatu kokoh/tempat sepatu sendal besi/rak sepatu serbaguna",
          "price_text": "Rp106.000",
          "price": 106000,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qukz-lkf172hd73u22d",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/5ARdueXJbI",
          "terjual": "8,2RB+",
          "tag": "unik",
          "gender": "pria",
          "pool": "pasangan"
        },
        
        {
          "title": "Hambel Parfum-For Candu (Cantik dan lugu) | Fruity & sweet | Parfum Wanita",
          "description": "Parfum candu yang berarti cantik dan lugu , parfum yang dibuat khusus perempuan- perempuan muda yang smart , simpel dan  girly . parfum ini beraroma campuran vanili dan buah-buahan.",
          "price_text": "Rp99.000 - Rp145.000",
          "price": 99000,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-7rbmi-llthjfwk7cxl46",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/2q3j7ja1Qa",
          "terjual": "8,2RB+",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "pasangan"
        },
        {
          "title": "Limitless - Sandal Wanita Slip On Baim Fuji Polos Viral Jibbitz",
          "description": " Sandal Wanita Slip On Baim Fuji Polos Viral Jibbitz Sandal Cewek Selop Wedges Platform Phylon Stiker 3D Warna - Size 36-40",
          "price_text": "Rp79.900",
          "price": 79900,
          "thumbnail": "https://down-id.img.susercontent.com/file/146275a232cd1c1f7789e5fed940f78f",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/9Uad4OiXbz",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "perempuan",
          "pool": "pasangan"
        },
        
        {
          "title": "Viqoo Fan Flowers Kipas Angin Mini Genggam Rechargeable USB Kipas Angin Mini Cute Karakter",
          "description": "Mangkuk keramik mewah dengan desain khas jepang dan motif bunga sakura.",
          "price_text": "Rp23.900",
          "price": 23900,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-22100-qv3zf816edived",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/A9qJjMopwv",
          "terjual": "7,2RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
        {
          "title": "Jam Dinding Digital Led",
          "description": "Jam dinding digital LED, dapat ditaruh dimeja dilengkapi dengan fitur suhu dan alarm.",
          "price_text": "Rp55.999",
          "price": 55999,
          "thumbnail": "https://down-id.img.susercontent.com/file/d24ce36c6b8e6178e4890740b9cd48ea",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/jXdEDjnR",
          "terjual": "7,1RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
        {
          "title": "Parfum Viral Candu (Cantik dan lugu) | Fruity & sweet | Parfum Wanita",
          "description": "Hambel Parfum-For Candu (Cantik dan lugu) | Fruity & sweet | Parfum Wanita",
          "price_text": "Rp99.000 - Rp145.000",
          "price": 99000, 
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-7rblc-lnspz09w0ih89a",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/8KOijn4x7M",
          "terjual": "8,2RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
        {
          "title": "Payung Lipat UV - Anti Hujan dan Sinar UV Matahari",
          "description": "Anti Hujan dan Sinar UV Matahari",
          "price_text": "Rp32.499 - Rp65.000",
          "price": 32499,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qukw-lg2dl8aj9p7scf",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/AK9jwYAJl3",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
        {
          "title": "LocknLock - Double Wall Cold Cup 750ML - HAP507",
          "description": "Double Wall Cold Cup ini difungsikan untuk menampung minuman dingin dan hanya air dingin saja, karena produk ini dapat rusak jika diisi air panas lebih dari 60 derajat celcius.",
          "price_text": "Rp96.000",
          "price": 96000,
          "thumbnail": "https://down-id.img.susercontent.com/file/61f5206aea1b19f6e7de36e6c0f5a986",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/2Ao2DqXfDa",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
        {
          "title": "Mangkuk Set Japanese #4",
          "description": "Mangkuk keramik mewah dengan desain khas jepang dan motif bunga sakura.",
          "price_text": "Rp. 24.500 - Rp. 99.000",
          "price": 24500,
          "thumbnail": "https://down-id.img.susercontent.com/file/7f8004c5405f78bb221c9a3466a59191",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/9K8R2hjyx4",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "tetangga"
        },
        {
          "title": "Mangkuk Set Japanese #5",
          "description": "Mangkuk keramik mewah dengan desain khas jepang dan motif bunga sakura.",
          "price_text": "Rp. 24.500 - Rp. 99.000",
          "price": 24500,
          "thumbnail": "https://down-id.img.susercontent.com/file/7f8004c5405f78bb221c9a3466a59191",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/9K8R2hjyx4",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "tetangga"
        },
        {
          "title": "Jam Dinding Besar DIY",
          "description": "Jam Dinding estetik dengan diameter 60-100 cm Akrilik Tebal 2mm Jarum Jam 16CM Jarum Menit 24 CM",
          "price_text": "Rp42.000",
          "price": 42000,
          "thumbnail": "https://down-id.img.susercontent.com/file/08df3e94a48eab0c80d453db7f94b2ae",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/2Ao2EKQ0vA",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
        {
          "title": "Lampu Hias Bola Kristal",
          "description": "Lampu buat kamar tidur Lampu Hias LED lampu hias kamar tidur Hadiah spesial lampu malam bulan bola kristal",
          "price_text": "Rp16.200 - Rp30.600",
          "price": 16200,
          "thumbnail": "https://down-id.img.susercontent.com/file/1cd8808c95dee620a5a834e7d8796bcf",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/2Ao2EKQ0vA",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
        {
          "title": "Mug Bebek Pola Lucu",
          "description": "Live Heating Mug Bebek Pola Unik Lucu/Keramik Mug Set Pemanas Listrik Listrik Murah Diimpor 100% Asli",
          "price_text": "Rp69.800",
          "price": 69800,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-22110-daudcltu3fjvef",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/6pZrn9oW7n",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
        {
          "title": "Notes Memo Cookie Biskuit Cokelat Lucu",
          "description": "TOKKADO Kukki Notes Memo Pad Mini Cookie Biskuit Cokelat Unik Lucu",
          "price_text": "Rp. 24.500 - Rp. 99.000",
          "price": 24500,
          "thumbnail": "https://down-id.img.susercontent.com/file/b5e6d5abd6169f1846cfff59f7c9e06b",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/4ponPf4xIn",
          "terjual": "475",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
        {
          "title": "Peci Wadimor",
          "description": "Peci Wadimor AC Non AC Tinggi 7 8 9 10 Original Peci Solat Hitam Pria Dewasa Kopiah Sholat Anak Laki Santri Pesantren Polos Kopyah Haji",
          "price_text": "Rp33.999",
          "price": 33999,
          "thumbnail": "https://down-id.img.susercontent.com/file/57fd059b68bc4f85ab2a1dd3275a5470",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/4AZ9eLdrcX",
          "terjual": "7,2RB+",
          "tag": "unik",
          "gender": "pria",
          "pool": "teman"
        },
        {
          "title": "Peci Wadimor",
          "description": "Peci Wadimor AC Non AC Tinggi 7 8 9 10 Original Peci Solat Hitam Pria Dewasa Kopiah Sholat Anak Laki Santri Pesantren Polos Kopyah Haji",
          "price_text": "Rp33.999",
          "price": 33999,
          "thumbnail": "https://down-id.img.susercontent.com/file/57fd059b68bc4f85ab2a1dd3275a5470",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/4AZ9eLdrcX",
          "terjual": "7,2RB+",
          "tag": "unik",
          "gender": "pria",
          "pool": "guru"
        },
        {
          "title": "Peci Wadimor",
          "description": "Peci Wadimor AC Non AC Tinggi 7 8 9 10 Original Peci Solat Hitam Pria Dewasa Kopiah Sholat Anak Laki Santri Pesantren Polos Kopyah Haji",
          "price_text": "Rp33.999",
          "price": 33999,
          "thumbnail": "https://down-id.img.susercontent.com/file/57fd059b68bc4f85ab2a1dd3275a5470",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/4AZ9eLdrcX",
          "terjual": "7,2RB+",
          "tag": "unik",
          "gender": "pria",
          "pool": "pasangan"
        },

        {
          "title": "SEPATU LARI ORTUSEIGHT HYPERBLAST NEO",
          "description": "SEPATU LARI ORTUSEIGHT HYPERBLAST NEO - SEPATU KEREN - SEPATU OLAHRAGA - SEPATU LIFESTYLE",
          "price_text": "Rp466.650",
          "price": 466650,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul6-ljsiy8gjcdgq89",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/6ztL0Y5nIn",
          "terjual": "2+",
          "tag": "unik",
          "gender": "pria",
          "pool": "teman"
        },
        {
          "title": "SEPATU LARI RUNNING ORIGINAL ORTUSEIGHT HYPERBLAST EVO 2.0",
          "description": "SEPATU LARI RUNNING ORIGINAL ORTUSEIGHT HYPERBLAST EVO 2.0 ~ HYPERGLIDE 1.3 ~ HYPERFUSE 1.3 NEW ARRIVAL 2023",
          "price_text": "Rp175.750",
          "price": 175750,
          "thumbnail": "https://down-id.img.susercontent.com/file/sg-11134201-7qve4-li14sw16q3zu03",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/4fVQEMPadl",
          "terjual": "2+",
          "tag": "unik",
          "gender": "pria",
          "pool": "teman"
        },
        {
          "title": "Mug Cangkir Keramik Tempat Sampah Unik 400mL",
          "description": "Gelas Mug Cangkir Keramik Bentuk Tempat Sampah Desain Unik Gelas Kopi 400mL",
          "price_text": "Rp88.000",
          "price": 88000,
          "thumbnail": "https://down-id.img.susercontent.com/file/7620b51fbb73f109e164dad145a5588b",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/qIeeUXPJn",
          "terjual": "65",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
        {
          "title": "Tumbler Baygon Unik",
          "description": "TUMBLER UNIK TUMBLER BAYGON TUMBLER LUCU BAYGON HIT BOTOL MINUM CUSTOM 500 ML HIT BAYGON LUCU TUMBLER",
          "price_text": "Rp52.100 - Rp68.900",
          "price": 52100,
          "thumbnail": "https://down-id.img.susercontent.com/file/acfca409e1f0b7292acab878f9b622c3",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/jXfa35br",
          "terjual": "219",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
        // {
        //   "title": "Mangkuk Set Japanese 77",
        //   "description": "Mangkuk keramik mewah dengan desain khas jepang dan motif bunga sakura.",
        //   "price_text": "Rp. 24.500 - Rp. 99.000",
        //   "price": 24500,
        //   "thumbnail": "https://down-id.img.susercontent.com/file/7f8004c5405f78bb221c9a3466a59191",
        //   "category": "AM",
        //   "source": "shopee",
        //   "link": "https://shope.ee/9K8R2hjyx4",
        //   "terjual": "10RB+",
        //   "tag": "unik",
        //   "gender": "unisex",
        //   "pool": "pernikahan"
        // },
        // {
        //   "title": "Mangkuk Set Japanese 88",
        //   "description": "Mangkuk keramik mewah dengan desain khas jepang dan motif bunga sakura.",
        //   "price_text": "Rp. 24.500 - Rp. 99.000",
        //   "price": 24500,
        //   "thumbnail": "https://down-id.img.susercontent.com/file/7f8004c5405f78bb221c9a3466a59191",
        //   "category": "AM",
        //   "source": "shopee",
        //   "link": "https://shope.ee/9K8R2hjyx4",
        //   "terjual": "10RB+",
        //   "tag": "unik",
        //   "gender": "unisex",
        //   "pool": "pernikahan"
        // },
        {
          "title": "Mangkuk Set Japanese 99",
          "description": "Mangkuk keramik mewah dengan desain khas jepang dan motif bunga sakura.",
          "price_text": "Rp. 24.500 - Rp. 99.000",
          "price": 24500,
          "thumbnail": "https://down-id.img.susercontent.com/file/7f8004c5405f78bb221c9a3466a59191",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/9K8R2hjyx4",
          "terjual": "10RB+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "pernikahan"
        },
        {
          "title": "MOLTEN Bola Basket Original",
          "description": "MOLTEN Bola basket molten bg4500 bg5000 ORIGINAL bola basket size 7",
          "price_text": "Rp215.300",
          "price": 215300,
          "thumbnail": "https://down-id.img.susercontent.com/file/d871087831972cae3fddafbc4b73d9da",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/7KWBPdo4lE",
          "terjual": "2+",
          "tag": "unik",
          "gender": "pria",
          "pool": "teman"
        },
        {
          "title": "Bola Basket Ballerbro MZ7 (Leather)",
          "description": "Bola Basket Ballerbro MZ7 (Leather)",
          "price_text": "299.300",
          "price": 299000,
          "thumbnail": "https://down-id.img.susercontent.com/file/1668a47f2b895fa61d569cb90fd6fc1a",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/9UafzidP62",
          "terjual": "2+",
          "tag": "unik",
          "gender": "pria",
          "pool": "teman"
        },
        {
          "title": "Raket Nyamuk Elektrik Cas Ori Tahan Lama Murah Awet Charger Usb 2 in1 Raket Nyamuk Standing",
          "description": "RTL Raket Nyamuk Elektrik Cas Ori Tahan Lama Murah Awet Charger Usb 2 in1 Raket Nyamuk Standing",
          "price_text": "Rp39.990",
          "price": 39990,
          "thumbnail": "https://down-id.img.susercontent.com/file/id-11134207-7qul1-lk6bv3ssakgr88",
          "category": "AM",
          "source": "shopee",
          "link": "https://shope.ee/6Ux4Ptrxj9",
          "terjual": "2+",
          "tag": "unik",
          "gender": "unisex",
          "pool": "teman"
        },
    ]);


    const handleSelectChange = (event) => {
        setSelectedItem(event.target.value);
        // console.log(selectedItem);
        filterDataProduct(event.target.value);
    };

    const handleClickCat = (name, index) => {
      console.log(index);
      setActiveIndex(index);
      filterDataProduct(name);
    }


    const filterDataProduct = (category) => {
        const newData = dataProducts.filter(item => item.pool == category );
        
        setIsVisible(false);
        

        const timeoutId = setTimeout(() => {
            // setMessage('Updated Message');
            setDataProduct(newData);
            setIsVisible(true);
          }, 750);
          
        // setDataProduct(newData);
          // Cleanup function to clear the timeout in case the component unmounts or the dependency changes
        return () => clearTimeout(timeoutId);
    }

    useEffect(()=>{
        console.log('data changing..')
        // setIsVisible(true);
    }, [dataProducts])

    const [activeIndex, setActiveIndex] = useState(-1)

    return (
      <div className='container max-w-[425px] mx-auto min-h-screen shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[white]' data-aos='fade-left'>

       <Header2/>
       
       <div className='w-[100%] font-DM font-semibold'>
                Daftar Kado
        </div>

        <div className='w-auto flex flex-row overflow-x-auto scrollbar-hide px-3'>
             {items.map((item, index) => (
                <div onClick={() => handleClickCat(item.value, index)} className={`cursor-pointer font-DM hover:bg-[#efeffc] flex-1 items-center w-min-[100px] mx-2 my-5 px-4 py-2 rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-xs ${ activeIndex === index ? 'bg-[#efeffc]' : 'bg-[#fff]'} `} key={index} value={item.value}>
                    {item.text}
                </div>
                ))}
        </div>

        {/* <div>
            <select id="dropdown" value={selectedItem} onChange={handleSelectChange} className='font-DM'>
                <option value="" disabled>
                Kado untuk
                </option>
                {items.map((item, index) => (
                <option key={index} value={item.value}>
                    {item.text}
                </option>
                ))}
            </select>
        </div> */}


       {/* Put All Content Here */}
        <div className={`transition-all duration-500 ease-in-out ${animationClasses} grid grid-cols-2 pb-10 px-3`}>
                {
                    dataProduct.map((product) => (
                        <div className='rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] m-2 cursor-pointer hover:bg-[#efeffc] h-auto'>
                            <div className='rounded-md'>
                                {/* <img src={product.thumbnail} alt="cari kado" width="100%" height={100}/> */}
                                <LazyLoadImage
                                    alt={'cari kado'}
                                    src={product.thumbnail} 
                                    effect="blur"
                                    />
                            </div>
                            <div className='inline capitalize font-DM text-[#000] text-[7px] px-1 bg-[#FFC864] text-center font-extrabold'>
                                {product.tag}
                            </div>

                            <div className='capitalize font-DM text-[black] text-xs px-2 flex items-center'>
                                {product.title}
                            </div>
                            <div className='inline capitalize font-DM text-[#000] text-[9px] px-1 bg-[#e8e8e8] text-center font-extrabold mb-2'>
                                {product.price_text}
                            </div>
                            <div className='font-DM m-2 px-2 py-1 bg-[#976BCF] text-center rounded-md text-white text-[7pt] uppercase font-bold'>
                              Order
                            </div>
                        </div>
                    ))
                }
        </div>
      </div>
    )
}

export default Product