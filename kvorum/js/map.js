var markersData = [
    {
        lat: 47.017561,      // Широта
        lng: 31.995146,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"м. Миколаїв, Центральний район, вул. проспект Героїв Сталінграда, 24;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 46.960369,       // Широта
        lng: 32.151049,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"м. Миколаїв, М14;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 46.885467,      // Широта
        lng: 32.027117,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"м. Миколаїв, Корабельний район, проспект Жовтневий, 236 Б;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 46.971587,       // Широта
        lng: 32.030000,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"вулиця Гречишникова, 43, Миколаїв, Миколаївська область, 54000"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 46.960717,       // Широта
        lng: 32.041615,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"м. Миколаїв, Ленінський район, вул. Херсонське шосе, буд.1/5;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 46.955177,       // Широта
        lng: 31.942714,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"м. Миколаїв, Заводський район, вул. Київська, 1;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 46.625348,       // Широта
        lng: 31.529566,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"Очаківський район, м. Очаків, вул. Першотравнева, 46/1;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 46.622088,       // Широта
        lng: 31.55217,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"Очаківський район, м. Очаків, вул. Чижикова, 139/1;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 47.405082,       // Широта
        lng: 32.436900,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"Баштанський район, м. Баштанка, вул. Театральна, 1;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 47.071813,        // Широта
        lng: 32.790846,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"Снігурівський район, м. Снігурівка, вул. Суворова 7-А;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 47.322093,        // Широта
        lng: 32.865992,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"Березнігуватський район, смт. Березнігувате, вул.Піонерська, 105 В;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 47.825049,        // Широта
        lng: 32.844471,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"Казанківський район, смт.Казанка, вул. Послушняка, 1-А;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 47.591058,        // Широта
        lng: 31.319031,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"м.Вознесенськ, вул.Жовтневої революції,245- А;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 47.635267,        // Широта
        lng: 31.000641,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"Первомайський район, смт.Доманівка, вул.Мельнична, 28А;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 46.650880,        // Широта
        lng: 32.575054,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"м. Херсон, вул. Фонтанна 15А;"   // Адрес, который также будем выводить в информационном окне
    },
    {
        lat: 46.639299,        // Широта
        lng: 32.616206,    // Долгота
        name: "Кворум", // Произвольное название, которое будем выводить в информационном окне
        address:"м. Херсон, вул. проспект Ушакова 2А."   // Адрес, который также будем выводить в информационном окне
    },
];

var map, infoWindow;
 
function initMap() {
    var centerLatLng = new google.maps.LatLng(47.017561, 31.995146);
    var mapOptions = {
        center: centerLatLng,
        zoom: 8
    };
 
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
    infoWindow = new google.maps.InfoWindow();
 
    google.maps.event.addListener(map, "click", function() {
        infoWindow.close();
    });
 
    // Определяем границы видимой области карты в соответствии с положением маркеров
    var bounds = new google.maps.LatLngBounds();
 
    for (var i = 0; i < markersData.length; i++){
 
        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;
 
        addMarker(latLng, name, address);
 
        // Расширяем границы нашей видимой области, добавив координаты нашего текущего маркера
        bounds.extend(latLng);
    }
 
    // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
    map.fitBounds(bounds);
 
}
google.maps.event.addDomListener(window, "load", initMap);

function addMarker(latLng, name, address) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name
    });
 
    google.maps.event.addListener(marker, "click", function() {
 
        var contentString = '<div class="infowindow">' +
                                '<h3>' + name + '</h3>' +
                                '<p>' + address + '</p>' +
                            '</div>';
 
        infoWindow.setContent(contentString);
        infoWindow.open(map, marker);
 
    });
}