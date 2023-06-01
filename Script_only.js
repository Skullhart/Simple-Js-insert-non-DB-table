<script>

    //Ferdian Aji Hartono 20410100042

    var i = 1;
    var x = 2;
    var tab = 0;
    const idbar =["A01","B02"];
    const nambar =["rejoice","pentine"];
    const hrgbeli =[1200,2500];
    const hrgjual =[1320,2750];
    const stok =[12,5];

$("#txidbar").mouseleave(function(){
    for (var x = 0; x < idbar.length; x++) {
        let target = $("#txidbar").val();
        let cari = idbar[x];
        let result = target.localeCompare(cari);
        if (result === 0) {
            $("#txnambar").val(nambar[x]);
            $("#txhrgjual").val(hrgjual[x]);
            $("#txhrgbeli").val(hrgbeli[x]);
            $("#txstok").val(stok[x]);
        }
    }
})

$("#txhrgbeli").mouseleave(function(){
    var temp = $("#txhrgbeli").val()*1.1;
    document.getElementById('txhrgjual').value = temp;
    });
    
function insert(){
    var cek = 0;
    var indeks = null;

        for (var x = 0; x < idbar.length; x++) {
        let target = $("#txidbar").val();
        let cari = idbar[x];
        let result = target.localeCompare(cari);
        if (result === 0) {
            cek = 1;
            indeks = x;
        }
    }
              
    if (cek == 1) {

        alert("data  update");

        if ($("#txidbar").val().length == 0) {
        alert("ID tidak boleh kosong");
            }else{
                if ($("#txnambar").val().length == 0) {
                    alert("Nama barang tidak boleh kosong");
                }else{
                    if ($("#txhrgbeli").val().length == 0) {
                        alert("Harga beli tidak boleh kosong");
                    }else{
                        if ($("#txstok").val().length == 0) {
                            alert("stok tidak boleh kosong");
                        }else{
                            if ($("#txstok").val() <= 0) {
                                alert("stok tidak boleh <= 0");
                            }else{
                                idbar[indeks] = $("#txidbar").val();
                                nambar[indeks] = $("#txnambar").val();
                                hrgbeli[indeks] = $("#txhrgbeli").val();
                                hrgjual[indeks] = $("#txhrgjual").val();
                                stok[indeks] = $("#txstok").val();
                                alert("data terupdate")
                            }
                        }
                    }
                }
            }

    }else{
        alert("data insert");
        if ($("#txidbar").val().length == 0) {
        alert("ID tidak boleh kosong");
            }else{
                if ($("#txnambar").val().length == 0) {
                    alert("Nama barang tidak boleh kosong");
                }else{
                    if ($("#txhrgbeli").val().length == 0) {
                        alert("Harga beli tidak boleh kosong");
                    }else{
                        if ($("#txstok").val().length == 0) {
                            alert("stok tidak boleh kosong");
                        }else{
                            if ($("#txstok").val() <= 0) {
                                alert("stok tidak boleh <= 0");
                            }else{
                                idbar[idbar.length] = $("#txidbar").val();
                                nambar[nambar.length] = $("#txnambar").val();
                                hrgbeli[hrgbeli.length] = $("#txhrgbeli").val();
                                hrgjual[hrgjual.length] = $("#txhrgjual").val();
                                stok[stok.length] = $("#txstok").val();
                                alert("data masuk");
                            }
                        }
                    }
                }
            }
        }

        var jmltab = document.getElementById("myTable").rows.length;

        for (var ii = 0; ii < jmltab-1; ii++) {
                document.getElementById("myTable").deleteRow(1);
            }

        i = 1;
        tab = 0;
        for (var ii = 0; ii < idbar.length; ii++) {
        var table = document.getElementById("myTable");
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = i;
        cell2.innerHTML = idbar[tab];
        cell3.innerHTML = nambar[tab];
        cell4.innerHTML = hrgbeli[tab];
        cell5.innerHTML = hrgjual[tab];
        cell6.innerHTML = stok[tab];
        i++;
        tab++;
        }

    }

/*

function fill(){

    var jmltab = document.getElementById("myTable").rows.length;

    for (var ii = 0; ii < jmltab-1; ii++) {
            document.getElementById("myTable").deleteRow(1);
        }
    }


function del(){
    for (var ii = 0; ii < idbar.length; ii++) {
        var table = document.getElementById("myTable");
        var row = table.deleteRow(i);
        var cell1 = row.deleteCell(0);
        var cell2 = row.deleteCell(1);
        var cell3 = row.deleteCell(2);
        var cell4 = row.deleteCell(3);
        var cell5 = row.deleteCell(4);
        var cell6 = row.deleteCell(5);
    }
}    

function primaryfc() {

    if (true) {
        var table = document.getElementById("myTable");
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = i;
        cell2.innerHTML = idbar[tab];
        cell3.innerHTML = nambar[tab];
        cell4.innerHTML = hrgbeli[tab];
        cell5.innerHTML = hrgjual[tab];
        cell6.innerHTML = stok[tab];
        i++;
        tab++;
    }else{alert("else")}
}


    */
</script>
