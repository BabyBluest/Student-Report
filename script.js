var öğr_sayaç=0;
var person = {isim:"boş", soyisim:"boş", not:0};//person objecti
var öğrisim="";
var öğrsoyisim="";
var öğrnot=0;

 var dizi_isimler=new Array(10);
 var dizi_soyisimler=new Array(10);
 var dizi_öğrnot=new Array(10);



function add_button_click(){
  
    öğrisim=document.getElementById("öğrenci_isim");
    öğrsoyisim=document.getElementById("öğrenci_soyisim");
    öğrnot=document.getElementById("öğrenci_not");

    if(öğr_sayaç<10){
   if(öğrisim.value==""||öğrsoyisim.value==""||öğrnot.value==""){
      console.log("bad moment");
   }
   else{
    dizi_isimler[öğr_sayaç]=öğrisim.value;
    dizi_soyisimler[öğr_sayaç]=öğrsoyisim.value;
    dizi_öğrnot[öğr_sayaç]=öğrnot.value;

    öğr_sayaç++;
         if(öğrnot.value<101){
             console.log("good moment");
             
           
           
         
                document.getElementById("sayaç_label").innerHTML=öğr_sayaç.toString()+" öğrenci eklendi";
            


         }
   }
}else{
       alert("öğrenci sayısı 10 oldu  '' kaydet ve Rapor sayfasına geçir'' butonu ile verileri rapor sayfasına geçirebilirsiniz");
       
}

}//add

function chart_add_button_click(){

  if(öğr_sayaç<10){
      alert("chart değerlendirmesi için 10 öğrenci kadar giriş yapılması gerekir");
  }
  else{
    localStorage.setItem('hafıza_isimler', JSON.stringify(dizi_isimler)); 
    localStorage.setItem('hafıza_soyisimler', JSON.stringify(dizi_soyisimler)); 
    localStorage.setItem('hafıza_not', JSON.stringify(dizi_öğrnot)); 

  }

}//chart_Add

function sıfırla(){
   öğr_sayaç=0;
   

   document.getElementById("sayaç_label").innerHTML="0 öğrenci eklendi";

}