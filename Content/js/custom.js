
$(function () {

    var formData; var submitElement; $(document).ready(function () {
        $('.moreLink').on('click', function (e) {
            e.preventDefault();
            $('.leftSearchSec .hideCon').slideToggle(); $(this).children('i').toggleClass('fa-arrow-up')
        });
        $("form#formSubscribe").submit(function (e) {
            var isValid = true;
            $('form#formSubscribe input').each(function () { if ($(this).val() == "") { isValid = false; $(this).focus(); } }); if (isValid) {
                $("form#formSubscribe button").attr('disabled', 'disabled').html('Sending...').addClass('smallFont');
                var data = $('form#formSubscribe').serialize(); $.post('/FooterLinks/ContactUs', data, function (result) {
                    if (result == "1")
                    {
                        $("form#formSubscribe button").html('Success');
                        var body = "<h2>Newsletter Subscription</h2><p>We are glad that you have successfully subscribed with us for Newsletter. From now, you will receive travel deals and updates directly in your inbox.</p><p class='enjoytravelling'><i class='fa fa-smile-o' aria-hidden='true'></i> Enjoy Travelling!</p><strong>Kind Regards</strong><br /><strong>sjrtravels.com</strong>";

                            $("#lblSubscribe .modal-title").html(title);
                            $("#lblSubscribe .modal-body").html(body);
                            $("#lblSubscribe").modal("show");                           

                    }
                    else if (result == "0")
                    {
                         $('#dvSubscribed').show();
                    }
                    else {
                        $("form#formSubscribe button").html('Error...');
                            var title = "Greetings";
                            var body = "<h2>Newsletter Subscription</h2><p>We are glad that you have successfully subscribed with us for Newsletter. From now, you will receive travel deals and updates directly in your inbox.</p><p class='enjoytravelling'><i class='fa fa-smile-o' aria-hidden='true'></i> Enjoy Travelling!</p><strong>Kind Regards</strong><br /><strong>sjrtravels.com</strong>";

                            $("#lblSubscribe .modal-title").html(title);
                            $("#lblSubscribe .modal-body").html(body);
                            $("#lblSubscribe").modal("show");
                    } setTimeout(function () {
                        $("form#formSubscribe")[0].reset();
                        $("form#formSubscribe button").html('<i class="fa fa-paper-plane"></i>').parent().remove('buttonbgcolor ');
                        $('#btnSubscribe').prop('disabled', true);
                        $('#btnSubscribe').parent().removeClass('buttonbgcolor');
                        $("form#formSubscribe button").removeClass('smallFont');
                }, 2000);
            });
            } e.preventDefault(); e.stopPropagation();
        });
    });
    $('#guestform').click(function (e) {
        e.preventDefault();
        $('#BE_Hotel_pax_box').toggle();
    });

    $('#totalperson').click(function () {
        $(this).parent().find('.dropdown-menu').toggle();
        //$(this).parent().parent().parent().toggleClass('search-top-option');

        if ($(window).width() < 768) {
            var m = $(this).offset().top - 30;
            $('html,body').animate({ scrollTop: m }, 'slow');
            $('.travelerOpen').css('top', a + -70);
        }
    });
        
    $(document).click(function (event) {
        if (!$(event.target).closest('.dropdown-menu').length) {
            if ($('.dropdown-menu').is(":visible")) {
                $('.dropdown-menu').hide();
            }
        }
    });
    $('.travelerClose').click(function (e) {
        $(this).parent().parent().toggle();

    });

    $('.cheading').click(function (e) {
        $('.callrequestback').fadeToggle("slow");
        $('.cheading i').toggleClass('fa-angle-up fa-angle-down');
        e.preventDefault();

    });
    $('.search-index-page .exchange_icon').click(function (e) {

        var vmorF = $('#tbFrom').val();
        var voT = $('#tbTo').val();
        
        var vhdnmorF = $('#hvFrom').val();
        var vhdnoT = $('#hvTo').val();

        $('#tbFrom').val(voT);
        $('#tbTo').val(vmorF);

        $('#hvFrom').val(vhdnoT);
        $('#hvTo').val(vhdnmorF);
        e.preventDefault();
    });
    $('strong.click').click(function (e) {
        $('.requestBox').fadeToggle("first");
        $('.click i').toggleClass('fa-chevron-down fa-chevron-up');
        e.preventDefault();

    });


    $('.toggleFeatures').click(function (e) {
        $(this).next().fadeToggle("first");
        $('.toggleFeatures i').toggleClass('fa-chevron-down fa-chevron-up');
        e.preventDefault();
    });

    $('.navbar-right.stroke ul li > .mn-sub li:nth-child(1) > a span').addClass('active');
    $('.navbar-right.stroke ul li .mn-sub li > a span').on('click', function (e) {
        var menuid = $(this).attr("data-id");
        $('.navbar-right > ul > li.megamenu ul li li a span').removeClass('active'); $(this).addClass('active');
        $('.destulholder ul').hide();

        $(this).parent().parent().parent().parent().siblings('#menu-item-25').children('.destulholder').children("#" + menuid).show();
        e.preventDefault;
    });


    $('.destulholder ul li > a').on('click', function (e) {
        $('.megamenu > ul').fadeToggle();
        e.preventDefault;
    });

    $('.clicktoslide').on('click', function () { $(this).next('.willslide').slideToggle(); $(this).toggleClass('active'); });


});

$(window).click(function () {
    //Hide the menus if visible
    $('#BE_Hotel_pax_box').hide();

});



$(document).ready(function (e) {
    $('#dealBlock').find('.flight-list-view').parent().addClass('list-remove-box');
    $('.filter-result').find('.container1').parent().addClass('list-remove-box');
    e.preventDefault;


});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".component-navigation").addClass("stick-header");
        $(".header-banner").addClass("banner-rotate");
    } else {
        $(".component-navigation").removeClass("stick-header");
        $(".header-banner").removeClass("banner-rotate");
    }

    if (scroll > 100) {
        $('#spnCountTitle').addClass('toolTip')
    }
    
    else {
        $('#spnCountTitle').removeClass('toolTip')
    }
});

$(function () {
    var x, i, j, selElmnt, a, b, c, it;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 0; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
});

$(function () {
    registerEvents(); 

    $('#tbFrom').autocomplete({
        autoFocus: true,
        minLength: 3,
        source: function (request, response) {
            var searchText = document.getElementById('tbFrom').value.trim();
            $.ajax({
                type: "POST",
                global: false,
                url: "/Flight/GetAutoSuggestion",
                data: "{searchCode:'" + (searchText) + "'}",
                contentType: "application/json; charset=utf-8",
                success: function (result)
                {
                    if (result.toString().indexOf("Invalid") == -1) {
                        var jsonData = JSON.parse(result);
                        response(jsonData);
                    }
                },
                error: function (result) {
                }
            });
        },
        focus: function (event, ui) {
            var text = ui.item.AN + " (" + ui.item.AC + "), " + ui.item.CIN + ", " + ui.item.CON + " (" + ui.item.COA + ")";       
            return false;
        },
        blur: function (event, ui) {
            var text = ui.item.AN + " (" + ui.item.AC + "), " + ui.item.CIN + ", " + ui.item.CON + " (" + ui.item.COA + ")";
            $("#tbFrom").val(text);
            $("#hvFrom").val(ui.item.AC);
            return false;
        },
     })
       .autocomplete("instance")._renderItem = function (ul, response) {
           var autoSuggest = "<li data-code='" + response.AC + "' class='" + response.P + "'>" + response.AN + " (" + response.AC + "), " + response.CIN + ", " + response.CON + " (" + response.COA + ")</li>";// response.autosuggest;
           var formattedText = autoSuggest;
           return $("<li class='airList'>")
              .append(" ")
              .append(formattedText)
              .appendTo(ul);
       };

    $('#tbTo').autocomplete({
        autoFocus: true,
        minLength: 3,
        source: function (request, response) {
            var searchText = document.getElementById('tbTo').value.trim();
            $.ajax({
                type: "POST",
                global: false,
               
                url: "/Flight/GetAutoSuggestion",
                data: "{searchCode:'" + (searchText) + "'}",
                contentType: "application/json; charset=utf-8",
                success: function (result)
                {
                    if (result.toString().indexOf("Invalid") == -1)
                    {
                        var jsonData = JSON.parse(result);
                        response(jsonData);
                    }
                },
                error: function (result) {
                }
            });
        },
        focus: function (event, ui) {
            var text = ui.item.AN + " (" + ui.item.AC + "), " + ui.item.CIN + ", " + ui.item.CON + " (" + ui.item.COA + ")";
            return false;
        },
        blur: function (event, ui) {
            var text = ui.item.AN + " (" + ui.item.AC + "), " + ui.item.CIN + ", " + ui.item.CON + " (" + ui.item.COA + ")";
            $("#tbTo").val(text);
            $("#hvTo").val(ui.item.AC);
            return false;
        },
        select: function (event, ui) {
            var text = ui.item.AN + " (" + ui.item.AC + "), " + ui.item.CIN + ", " + ui.item.CON + " (" + ui.item.COA + ")";
            $("#tbTo").val(text);
            $("#hvTo").val(ui.item.AC);
            if ($('#tbDepart').val() == "") {
                $('#tbDepart').focus()
            }
            return false;
        }
    })
   .autocomplete("instance")._renderItem = function (ul, response) {
       var autoSuggest = "<li data-code='" + response.AC + "' class='" + response.P + "'>" + response.AN + " (" + response.AC + "), " + response.CIN + ", " + response.CON + " (" + response.COA + ")</li>";// response.autosuggest;
       var formattedText = autoSuggest;
       return $("<li class='airList'>")
          .append(" ")
          .append(formattedText)
          .appendTo(ul);
   };

    $("input[name='ddlTypejourney']").click(DisableReturnField);
    function GetNom() {
        var nom=2;
        if (screen.width < 960)
        {
            nom = 1;
        }
        return nom;
    }

    $("#tbDepart").datepicker({
        minDate: 0,
        maxDate:"+1y",
        numberOfMonths: GetNom(),
        dateFormat: "dd-M-yy",
        defaultDate: "dd-MM-yyyy",
        onSelect: function (selectedDate) {
            //
            if ($("input[name='ddlTypejourney']:checked").val() === "1") {
                setTimeout(function () {
                    $('#tbReturn').datepicker('show');
                }, 300)
            }
            //
            $('.please-f-dtDep').hide();
            $("#tbReturn").datepicker("option", "minDate", selectedDate);
        },
        onClose: function (selectedDate) {
            if (selectedDate != "") {
                $("#tbReturn").datepicker("option", "minDate", selectedDate);
            }
            else {
                $("#tbReturn").datepicker("option", "minDate", new Date());

            }
        }
    });
    $("#tbReturn").datepicker({
        minDate: 0,
        maxDate: "+1y",
        numberOfMonths: GetNom(),
        dateFormat: "dd-M-yy",
        onSelect: function (selectedDate) {

            $('.please-f-dtRet').hide();
        }
    });
                                         

    function GetDate(days) {
        var newdate = new Date();
        newdate.setDate(newdate.getDate() + days || 0);
        return newdate;
    }

   
    $("#tbFrom").keyup(function (e) {
        $('.please-s-or').hide();
   });

    $("#tbTo").keyup(function (e) {
        $('.please-s-dest').hide();
    });
   

   
    $(".select-selected").on("click", function (e) {
        $(this).parent().parent().find('.please-f-city').hide();
        e.preventDefault();
    });

    $(".select-selected").on("click", function (e) {
        $(this).parent().parent().find('.please-s-city').hide();
        e.preventDefault();
    });

  

    //DPS

    $(".tbDepart1").datepicker({
        minDate: 0, maxDate: "+1y", dateFormat: "dd-M-yy",
        defaultDate: "+4", dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        onClose: function (selectedDate) {
            if (selectedDate != "") {
                $(".tbReturn1").datepicker("option", "minDate", selectedDate);
            }
            else {
                $(".tbReturn1").datepicker("option", "minDate", new Date());

            }
        }
    }).datepicker('setDate', GetDate(7));
    $(".tbReturn1").datepicker({
        minDate: 0, maxDate: "+1y", dateFormat: "dd-M-yy",
        defaultDate: "+11", dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    }).datepicker('setDate', GetDate(14));

   
    $('.openpromocode').on('click', function (e) {
        e.preventDefault();
        $('.promocode').toggleClass('active');
    });

    function CheckPaxDistribution() {
        var isValid = true;
        
        if (parseInt($('#ddlInfantOnLap').val()) > parseInt($('#ddlAdultCount').val())) {
            $('.adult-infant').text('Infants count cannot be greater than adult count ');
            $('.adult-infant').show();
            $('#ddlInfantOnLap').focus();
            isValid = false;
        }
        else
        {
            $('#ddlInfantOnLap').removeClass("error");
        }
     
        if ((parseInt($('#ddlAdultCount').val()) + parseInt($('#ddlChildCount').val())) > 9) {
            $('.pax-ratio').text('Total pax count (adult+child) should not exceed 9');
            $('.pax-ratio').show();

            isValid = false;
        }
        else
        {
            $('#ddlAdultCount').removeClass("error");
            $('#ddlChildCount').removeClass("error");
        }
        return isValid;
    };

    $('select').on('change', function () {
        $('.pax-ratio').hide();
        $('.adult-infant').hide();
        CheckPaxDistribution();
        
    });

    $("#btnSearchFlights").click(function (e) {       
        var dname = window.location.hostname.toLowerCase();
        
        var isValid = true;
        if ($('#tbFrom').val() == "") {
            $('#hvFrom').val("");
            isValid = false;
            $('.please-s-or').text('Please select origin');
            $('.please-s-or').show();            
            $(this).focus();
        }
        else if ($('#hvFrom').val() == "") {
            isValid = false;
            $('.please-s-or').text('Please enter valid origin');
            $('.please-s-or').show();
            $(this).focus();
        }
        if (isValid) {
            if ($('#tbTo').val() == "") {
                isValid = false;
                $('#hvTo').val("");
                $('.please-s-dest').text('Please select destination');
                $('.please-s-dest').show();                
                $(this).focus();
            }
            else if ($('#hvTo').val() == "") {
                isValid = false;
                $('.please-s-dest').text('Please enter valid destination');
                $('.please-s-dest').show();
                $(this).focus();
            }            
        }
        if (isValid) {
            if (($('#hvFrom').val()) != "" && ($('#hvTo').val()) != "") {
                if (($('#hvFrom').val()) == ($('#hvTo').val())) {
                    isValid = false;
                    $('.please-s-dest').text('Source and destination can not be same');
                    $('.please-s-dest').show();
                    $(this).focus();
                }
                else {
                    isValid = true;
                }
            }
        }
        if (isValid) {
            if ($('#tbDepart').val() == "") {
                isValid = false;
                $('.please-f-dtDep').show();
                $(this).focus();
            }
        }
       
        if ($("input[name='ddlTypejourney']:checked").val() === "1") {
            if (isValid) {
                if ($('#tbReturn').val() == "") {
                    isValid = false;
                    $('.please-f-dtRet').show();
                    $(this).focus();
                }
            }
            }
      
        //Added for pax distribution start


        if (isValid)
        {
            isValid = CheckPaxDistribution();
        if (!isValid) {
            isValid = false;
            //$('.pax-ratio').show();
            $(this).focus();
        }
    }

        ////Added for pax distribution end

        if (isValid) {
         
            if ($("#btnSearchFlights").hasClass("fa")) {
                $("#btnSearchFlights").attr('disabled', 'disabled').removeClass("fa-search").addClass("fa-ellipsis-h");
            }
            else {
                $("#btnSearchFlights").append('<div class="bar">Searching...</div>');
               
            }

            var data = $('#formAirSearch').serialize();
            $.post('/Search/AirSearch/', data, function (result) {

                if (result == "Success")
                {
                    

                if (window.parent) {
                    window.parent.location = "/air/listing/" + $("#hdnFlightGuid").val();
                } else {
                    window.location = "/air/listing/" + $("#hdnFlightGuid").val();
                }
                }
                else
                {
                    if (window.parent) {
                        window.parent.location = window.parent.location;
                    } else {
                        window.location = window.location;
                    }
                }
            });
        }
        e.stopPropagation();
        e.preventDefault();
        return false;
    });
    //

    function CheckPaxDistribution1() {
        var isValid = true;
        
        if (parseInt($('#ddlInfantOnLap1').val()) > parseInt($('#ddlAdultCount1').val())) {
            $('.adult-infant1').text('Infants count cannot be greater than adult count');
            $('.adult-infant1').show();

            isValid = false;
        }
        else
        {
            $('#ddlInfantOnLap1').removeClass("error");
        }
        if ((parseInt($('#ddlAdultCount1').val()) + parseInt($('#ddlChildCount1').val())) > 9) {
            $('.pax-ratio1').text('Total pax count (adult+child) should not exceed 9');
            $('.pax-ratio1').show();

            isValid = false;
        }
        else
        {
            $('#ddlAdultCount1').removeClass("error");
            $('#ddlChildCount1').removeClass("error");
        }
        return isValid;
    };

    $('#ddlAdultCount1').on('change', function () {
        $('.pax-ratio1').hide();
        $('.adult-infant1').hide();
        CheckPaxDistribution1();

    });
    $('#ddlChildCount1').on('change', function () {
        $('.pax-ratio1').hide();
        CheckPaxDistribution1();

    });
    $('#ddlInfantOnLap1').on('change', function () {

        $('.adult-infant1').hide();
        CheckPaxDistribution1();

    });
    $("#btnSearchFlights1").click(function (e) {
        
        var dname = window.location.hostname.toLowerCase();
        var isValid = true;
        $('#formAirSearch1 input[type="text"]').each(function () {
            if ($(this).val() == "") {
                isValid = false;
                $(this).focus();
                $(this).addClass('error');
                return false;
            }
            else {
                $(this).removeClass('error');
            }
        });
        //Added for pax distribution start
        if (isValid) {
            isValid = CheckPaxDistribution1();
            if (!isValid) {
                isValid = false;
                $('.pax-ratio1').show();
            }
        }
            ////Added for pax distribution end
        if (isValid) {
            if ($("#btnSearchFlights1").hasClass("fa")) {
                $("#btnSearchFlights1").attr('disabled','disabled').removeClass("fa-search").addClass("fa-ellipsis-h");
            } else {
                $("#btnSearchFlights1").attr('disabled','disabled').html("Processing...");
            }
            var data = $('#formAirSearch1').serialize();
            $.post('/Search/AirSearch/', data, function (result) {

                if (result == "Success") {

                    if (window.parent) {
                        window.parent.location = "/air/listing/" +$("#hdnFlightGuid1").val();
                    } else {
                        window.location = "/air/listing/" + $("#hdnFlightGuid1").val();
                    }
                }
                else {
                    if (window.parent) {
                        window.parent.location = window.parent.location;
                    } else {
                        window.location = window.location;
                    }
                }
            });
          
        }
        e.stopPropagation();
        e.preventDefault();
        return false;
    });

    $("#btnSearchFlight").click(function (e) {
        var dname = window.location.hostname.toLowerCase();
        var isValid = true;
        if (isValid) {
            var data = $("#hdnRSearch").val();
            var vRTOrMcity = "AirSearch";

            $.post('/Search/AirSearch/', data, function (result) {
                if (result == "Success") {
                    if (window.parent) {
                        window.parent.location = "/air/listing/" + $("#hdnPaymentFlightGuidID").val();
                    }
                    else {
                        window.location = "/air/listing/" + $("#hdnPaymentFlightGuidID").val();
                    }
                }
                else {
                    if (window.parent) {
                        window.parent.location = window.parent.location;
                    }
                    else {
                        window.location = window.location;
                    }
                }
            });
        }
        e.stopPropagation();
        e.preventDefault();

        return false;
    });

    function DisableReturnField() {
        if ($("input[name='ddlTypejourney']:checked").val() === "1") {
            InitializeDate(); $("#returnDateDiv").prop("style").display = "inline", $("#tbReturn").val("");
        }
        else {
            InitializeDate(); $("#returnDateDiv").prop("style").display = "none", $("#tbReturn").val("");
        }
    }
    function InitializeDate() {
        jQuery("#tbDepart").datepicker("option", { minDate: 'today', maxDate: "+1y"});
        
    }
    // $(window).load(function () { $("#tbDepart,#tbReturn").val(""); })

});


function registerEvents() {
    $('.input-group-addon subIcon').on('click', function () {
        var input = $(this).next()
        input.val(+input.val() + 1);
        updateTravellerCount();
        return false;
    })
    $('.input-group-addon.addIcon').on('click', function () {
        var input = $(this).prev()
        var val = +input.val() > 0 ? +input.val() - 1 : 0
        input.val(val);
        updateTravellerCount();
        return false;
    });
}

function UpdateTravelerCount(mode, paxtype, triptype) {
    
    var count = 0;
    var maxcount = 6;
    var mincount = 0;
    var adtCount = 0;
    var chdCount = 0;
    var infInLapCount = 0;
    var infInSeatCount = 0;

    switch (paxtype) {
        case 'ADT':
            if (triptype == 3) {
                count = parseInt($("#ddlAdultCountMulti").val());
                console.log(count);
            } else {
                count = parseInt($("#ddlAdultCount").val());

            }
            if (mode == 1) {
                if (count < 9) {
                    if (triptype == 3) {
                        $("#ddlAdultCountMulti").val(parseInt($("#ddlAdultCountMulti").val()) + 1);
                    } else {
                        $("#ddlAdultCount").val(parseInt($("#ddlAdultCount").val()) + 1);
                    }
                }

            } else {
                if (count > mincount + 1) {
                    if (triptype == 3) {
                        $("#ddlAdultCountMulti").val(parseInt($("#ddlAdultCountMulti").val()) - 1);
                    } else {
                        $("#ddlAdultCount").val(parseInt($("#ddlAdultCount").val()) - 1);
                    }
                }
            }

            break;
        case 'CHD':
            if (triptype == 3) {
                count = parseInt($("#ddlChildCountMulti").val());
            } else {
                count = parseInt($("#ddlChildCount").val());
            }
            if (mode == 1) {

                if (count < 7) {
                    if (triptype == 3) {
                        $("#ddlChildCountMulti").val(parseInt($("#ddlChildCountMulti").val()) + 1);
                    } else {
                        $("#ddlChildCount").val(parseInt($("#ddlChildCount").val()) + 1);
                    }
                }

            } else {
                if (count > mincount) {
                    if (triptype == 3) {
                        $("#ddlChildCountMulti").val(parseInt($("#ddlChildCountMulti").val()) - 1);
                    } else {
                        $("#ddlChildCount").val(parseInt($("#ddlChildCount").val()) - 1);
                    }
                }
            }

            break;
        case 'INF':
            if (triptype == 3) {
                count = parseInt($("#ddlInfantOnLapMulti").val());
            } else {
                count = parseInt($("#ddlInfantOnLap").val());
            }
            if (mode == 1) {

                if (count < maxcount) {
                    if (triptype == 3) {
                        $("#ddlInfantOnLapMulti").val(parseInt($("#ddlInfantOnLapMulti").val()) + 1);
                    } else {
                        $("#ddlInfantOnLap").val(parseInt($("#ddlInfantOnLap").val()) + 1);
                    }
                }

            } else {
                if (count > mincount) {
                    if (triptype == 3) {
                        $("#ddlInfantOnLapMulti").val(parseInt($("#ddlInfantOnLapMulti").val()) - 1);
                    } else {
                        $("#ddlInfantOnLap").val(parseInt($("#ddlInfantOnLap").val()) - 1);
                    }
                }
            }

            break;
        case 'INS':
            if (triptype == 3) {
                // count = parseInt($("#ddlInfantOnSeatMulti").val());
            }
            else {
                //    count = parseInt($("#ddlInfantOnSeat").val());
            }
            if (mode == 1) {

                if (count < maxcount) {
                    if (triptype == 3) {
                        //    $("#ddlInfantOnSeatMulti").val(parseInt($("#ddlInfantOnSeatMulti").val()) + 1);
                    }
                    else {
                        //  $("#ddlInfantOnSeat").val(parseInt($("#ddlInfantOnSeat").val()) + 1);
                    }
                }

            } else {
                if (count > mincount) {
                    if (triptype == 3) {
                        // $("#ddlInfantOnSeatMulti").text(parseInt($("#ddlInfantOnSeatMulti").val()) - 1);
                    }
                    else {
                        //    $("#ddlInfantOnSeat").val(parseInt($("#ddlInfantOnSeat").val()) - 1);
                    }
                }
            }

            break;
    }
    if (triptype == 3) {
        adtCount = parseInt($("#ddlAdultCountMulti").val());
        chdCount = parseInt($("#ddlChildCountMulti").val());
        infInLapCount = parseInt($("#ddlInfantOnLapMulti").val());
        // infInSeatCount = parseInt($("#ddlInfantOnSeatMulti").val());
    } else {
        adtCount = parseInt($("#ddlAdultCount").val());
        chdCount = parseInt($("#ddlChildCount").val());
        infInLapCount = parseInt($("#ddlInfantOnLap").val());
        //  infInSeatCount = parseInt($("#ddlInfantOnSeat").val());
    }
    var totaltraveler = adtCount + chdCount + infInLapCount + infInSeatCount;

    var vcabinclass = $('#mCabinClass').find(":selected").text();

    if (totaltraveler >= 1) {
        $('#AdultCount').val(adtCount);
        $('#ChildCount').val(chdCount);
        $('#InfantCount').val(infInSeatCount);
        // $('#InfantInlapCount').val(infInLapCount);
        //$('#NumberofTraveler').val(totaltraveler + ' ' + 'Traveler');
        $('#NumberofTraveler').val(totaltraveler + ' Traveler' + ', ' + vcabinclass);
    }

    if (triptype == 3) {
        $("#spnToatalTrvellerMulti").text(totaltraveler);
    } else {
        //$("#spnToatalTrveller").text(totaltraveler);
        //$("#totalperson").val(totaltraveler + ' ' + 'Traveler');
        $("#totalperson").val(totaltraveler  + ' Traveler' + ', ' + vcabinclass);
    }
}

$("select#mCabinClass").change(function () {
    var vcombined = $("#totalperson").val();//'1 Adult ,Economy';
    var element = vcombined.split(",");
    element[1] = $("#mCabinClass option:selected").text();
    //$("#totalperson").val(element[0] + ',' + element[1]);
    $("#totalperson").val(element[0] + ', ' + element[1]);
});


function HidePaxBox() {
    $("#divTraveller").hide();
    $("#divTraveller").removeClass('active');
}

function SetClass($this) {
    $("#spnClass").text($($this).find('option:selected').text());
    $("#hdnFlightClass").val($($this).val());

}

function SetClassMulticity($this) {
    $("#spnClassMulticity").text($($this).find('option:selected').text());
    $("#hdnFlightClass").val($($this).val());
}

$(document).mouseup(function (e) {
    //$("#divTraveller").slideToggle();
    var container = $("#divTraveller");
    var containerMulty = $('#divTravellerMulticity');
    if ($("#passengerCount, #btnTraveller i").is(e.target)) {
        container.toggle();
        $("#divTraveller").removeClass('active');
    } else if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        $("#divTraveller").removeClass('active');
    }

    var container3 = $(".popover-markup > .content");
    if ($(".popover-markup").is(e.target)) {
        container3.toggle();
        $(".popover-markup > .content").removeClass('active');
    } else if (!container3.is(e.target) && container3.has(e.target).length === 0) {
        container3.hide();
        $(".popover-markup > .content").removeClass('active');
    }
    e.preventDefault();
    if ($("#passengerCountMulticity, #btnTravellerMulticity i").is(e.target)) {
        containerMulty.toggle();
        $("#divTravellerMulticity").removeClass('active');
    } else if (!containerMulty.is(e.target) && containerMulty.has(e.target).length === 0) {
        containerMulty.hide();
        $("#divTravellerMulticity").removeClass('active');
    }
});


function ClearField(elmRef) {
    var elmField = $(elmRef).siblings('.typeahead').attr('id');
    $("#" + elmField).val('');
    $(elmRef).hide();
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

jQuery(document).ready(function ($) {

    $('#myCarousel').carousel({
        interval: 5000
    });

    $('#carousel-text').html($('#slide-content-0').html());

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('#myCarousel').carousel(id);
    });


    // When the carousel slides, auto update the text
    $('#myCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        $('#carousel-text').html($('#slide-content-' + id).html());
    });
    //$('.flight-list-view').on('click', function () {
    //    var a = $(this).offset().top;
        
    //    $('.searchHolder').fadeIn();
    //    $('.searchHolder').css('top', a -40);
       

    //    var datext = $(this).parents('.flight-book').siblings(".flight-desc").children('.landing').children('h4.dep').text();
    //    var datext1 = $(this).parents('.flight-book').siblings(".flight-desc").children('.landing').children('h4.arr').text();

    //    var datextsplit = datext.split(',');
    //    var datext1split = datext1.split(',');

    //    $('.tbDepart1').val(datextsplit[1])
    //    $('.tbReturn1').val(datext1split[1]);
    //    $('html,body').animate({ scrollTop: a - 70 }, 'slow');
    //})

    $('.closewidget').on('click', function () {
        $('.searchHolder').fadeOut();
        $('.businessClassHolder .farePricetable ul li').removeClass('active');
    });
    $(".inactivity_ok").click(function (e) {
        $(this).parent().parent().parent().hide();
        $(this).parent().parent().parent().parent().find('overlaybgpopup').hide();
        $('.overlaybgpopup').hide();
    });
    $('.enquireNow').on('click', function (e) {
        $(this).parent().addClass('enquire-Nox');
        e.preventDefault();
    });
    
});


$(function () {
    var $popover = $('.popover-markup>.trigger').popover({
        html: true,
        placement: 'bottom',
        // title: '<?= lang("Select passengers");?><a class="close demise");">�</a>',
        content: function () {
            return $(this).parent.find('.content').html();
            //return $(this).parent().find('.content').html();
        }
    });

    // open popover & inital value in form
    var passengers = [1, 0, 0];
    $('.popover-markup>.trigger').click(function (e) {
        e.stopPropagation();
        $(".popover-content input").each(function (i) {
            $(this).val(passengers[i]);
        });
    });
    // close popover



    $('.popover-markup>.trigger input').click(function (e) {
        $('.content').toggle();
        e.preventDefault();
    });

    // store form value when popover closed
    $popover.on('hide.bs.popover', function () {
        $(".popover-content input").each(function (i) {
            passengers[i] = $(this).val();
        });
    });
    // spinner(+-btn to change value) & total to parent input 
    //$(document).on('click', '.number-spinner a', function () {
    //    var btn = $(this),
    //    input = btn.closest('.number-spinner').find('input'),
    //    total = $('#passengers').val(),
    //    oldValue = input.val().trim();

    //    if (btn.attr('data-dir') == 'up' || btn.attr('data-dir') == 'dwn')
    //     {
    //        if (btn.attr('data-dir') == 'up') {
    //            if (oldValue < input.attr('max')) {
    //                oldValue++;
    //                total++;
    //            }
    //        }
    //        if (btn.attr('data-dir') == 'dwn')//else
    //        {
    //            if (oldValue > input.attr('min')) {
    //                if (oldValue > 0) {
    //                    oldValue--;
    //                    total--;
    //                }
    //            }
    //        }
    //        $('#passengers').val(total);
    //        input.val(oldValue);
    //    }
    //    else
    //    {
    //        if (btn.attr('data-dir') == 'up1') {
    //            if (oldValue < input.attr('max')) {
    //                oldValue++;
    //                //total++;
    //            }
    //        }
    //        if (btn.attr('data-dir') == 'dwn1')
    //        {
    //            if (oldValue > input.attr('min')) {
    //                if (oldValue > 0) {
    //                    oldValue--;
    //                  //  total--;
    //                }
    //            }
    //        }
    //       // $('#passengers').val(total);
    //        input.val(oldValue);
    //    }
    //});


    $(document).on('click', '.number-spinner a', function () {
        var btn = $(this),
        input = btn.closest('.number-spinner').find('input'),
        total = $('#passengers').val(),
        oldValue = input.val().trim();

        if (btn.attr('data-dir') == 'up' || btn.attr('data-dir') == 'dwn') {
            if (btn.attr('data-dir') == 'up') {
                if (oldValue < input.attr('max')) {
                    oldValue++;
                    total++;
                }
            }
            if (btn.attr('data-dir') == 'dwn')//else
            {
                if (oldValue > input.attr('min')) {
                    if (oldValue > 0) {
                        oldValue--;
                        total--;
                    }
                }
            }
            $('#passengers').val(total);
            input.val(oldValue);
        }
        else {
            if (btn.attr('data-dir') == 'up1') {
                if (oldValue < input.attr('max')) {
                    oldValue++;
                    //total++;
                }
            }
            if (btn.attr('data-dir') == 'dwn1') {
                if (oldValue > input.attr('min')) {
                    if (oldValue > 0) {
                        oldValue--;
                        //  total--;
                    }
                }
            }
            // $('#passengers').val(total);
            input.val(oldValue);
        }
    });

    $(document).on('click', '.number-spinner2 a', function () {
        var btn = $(this),
        input = btn.closest('.number-spinner2').find('input'),
        total = $('#passengers2').val(),
        oldValue = input.val().trim();

        if (btn.attr('data-dir') == 'up2' || btn.attr('data-dir') == 'dwn2') {
            if (btn.attr('data-dir') == 'up2') {
                if (oldValue < input.attr('max')) {
                    oldValue++;
                    total++;
                }
            }
            if (btn.attr('data-dir') == 'dwn2')//else
            {
                if (oldValue > input.attr('min')) {
                    if (oldValue > 0) {
                        oldValue--;
                        total--;
                    }
                }
            }
            $('#passengers2').val(total);
            input.val(oldValue);
        }
    });
    $(".popover-markup>.trigger").popover('show');
});


$(document).ready(function () {
    setTimeout(function () {
        $(".hasDatepicker").on('click', function () {
            abc();
        });

        var abc = function () {
            $("#ui-datepicker-div .ui-datepicker-calendar a").on('click', function () {
                $('.hasDatepicker + label.error').css("display", "none")
                $('.hasDatepicker').removeClass('error')
            });
        }
    }, 1000)
})

$(".sitemapList li ul").hide();
$(".sitemapList li a").on('click', function (e) {
    e.preventDefault();
    $(".sitemapList li a").removeClass('active')
    $(this).addClass('active');
    $(".sitemapList li ul").fadeOut();
    $(this).next('ul').fadeIn();
});

$(".sitemapList li a").eq(0).click();
$("[id*='cphFull_rptPaging_lnkPage']").on('click', function (e) {
    var breadTop = $('.breadcrumb-custom').offset().top;
    $("body,html").animate({
        scrollTop: breadTop
    }, 800);
});


var formData, submitElement;

function GetDate(e) {
    var t = new Date;
    return t.setDate(t.getDate() + e || 0), t
}

function DisableReturnField() {
    "1" === $("input[name='ddlTypejourney']:checked").val() ? ($("#tbReturn").prop("disabled", !1), InitializeDate()) : (InitializeDate(), $("#tbReturn").prop("disabled", !0), $("#tbReturn").val(""))
}

function InitializeDate() {
    jQuery("#tbDepart").datepicker("option", {
        minDate: "today",
        maxDate: "+1y"
    })
}

function ProcessInput(e) {
    var t = $(e).parents(".callInfo"),
        a = $(t).find(".inName").val(),
        n = $(t).find(".inEmail").val(),
        i = $(t).find(".inPhone").val();
    if ($("#hdnName").val(a), $("#hdnEmail").val(n), $("#hdnPhone").val(i), $.trim($("#rf_name").val()))
        if ($.trim($("#rf_email").val()))
            if (ValidateEmail($("#rf_email").val())) {
                if ($.trim($("#rf_phone").val())) return !!$("#rf_phone").val().match("[0-9]{10}") || ($("#rf_name").siblings(".error").css("display", "none"), $("#rf_email").siblings(".error").css("display", "none"), $("#rf_email").siblings(".error1").css("display", "none"), $("#rf_phone").siblings(".error").css("display", "none"), $("#rf_phone").siblings(".error2").css("display", "block"), void $("#rf_phone").focus());
                $("#rf_name").siblings(".error").css("display", "none"), $("#rf_email").siblings(".error").css("display", "none"), $("#rf_email").siblings(".error1").css("display", "none"), $("#rf_phone").siblings(".error").css("display", "block"), $("#rf_phone").siblings(".error2").css("display", "none"), $("#rf_phone").focus()
            } else $("#rf_name").siblings(".error").css("display", "none"), $("#rf_email").siblings(".error").css("display", "none"), $("#rf_email").siblings(".error1").css("display", "block"), $("#rf_email").focus();
        else $("#rf_name").siblings(".error").css("display", "none"), $("#rf_email").siblings(".error").css("display", "block"), $("#rf_email").siblings(".error1").css("display", "none"), $("#rf_email").focus();
    else $("#rf_name").siblings(".error").css("display", "block"), $("#rf_name").focus()
}

function ValidateEmail(e) {
    return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(e)
}
setInterval(function () {
    $(".mobile_nav ul li a span").on("click", function (e) {
        var t = $(this).attr("data-id");
        $(".mobiledestmenu ul").hide(), $(".mobiledestmenu #" + t).show(), e.preventDefault()
    }), $(".mobile_nav ul li a span").on("click", function (e) {
        $(".mobiledestmenu:hidden").show(), e.preventDefault()
    })
}, 500), $(window).load(DisableReturnField), $(function () {
    $('.timeout-popup.callinpopup').delay(5000).fadeIn('slow');
    $('.overlaybgpopup').delay(5000).fadeIn('slow');

    $("#SearchContainer .selector li").click(function () {
        var e = $(this).attr("data-id");
        $("#SearchContainer div.row[data-id]").addClass("hidden"), $("#SearchContainer div.row[data-id='" + e + "']").removeClass("hidden"), $("#SearchContainer .selector li").removeClass("active"), $(this).addClass("active")
    });
    var e = 0;
    iLength = $("#SearchContainer .animate span").length, setInterval(function () {
        e %= iLength;
        var t = $("#SearchContainer .animate span:eq(" + e + ")");
        e = ++e % iLength;
        var a = $("#SearchContainer .animate span:eq(" + e + ")");
        t.fadeToggle(500), a.fadeToggle(500)
    }, 2e3), $("#SearchContainer .animate span:eq(0)").show(),


    $('#tbFrom').autocomplete({
        autoFocus: true,
        minLength: 3,
        source: function (request, response) {
            var searchText = document.getElementById('tbFrom').value.trim();
            $.ajax({
                type: "POST",
                global: false,
                url: "/Flight/GetAutoSuggestion",
                data: "{searchCode:'" + (searchText) + "'}",
                contentType: "application/json; charset=utf-8",
                success: function (result)
                {
                    if (result.toString().indexOf("Invalid")==-1)
                    {
                        var jsonData = JSON.parse(result);
                        response(jsonData);
                    }
            	},
                error: function (result) {
                }
            });
        },
        open: function () {
        },
        //focus: function (event, ui) {
        //    var text = ui.item.AN + " (" + ui.item.AC + "), " + ui.item.CIN + ", " + ui.item.CON + " (" + ui.item.COA + ")";
        //    $("#tbFrom").val(text);
        //    $("#hvFrom").val(ui.item.AC);
        //    return false;
        //},

        blur: function (event, ui) {
            var text = ui.item.AN + " (" + ui.item.AC + "), " + ui.item.CIN + ", " + ui.item.CON + " (" + ui.item.COA + ")";
            $("#tbFrom").val(text);
            $("#hvFrom").val(ui.item.AC);
            return false;
        },
        select: function (event, ui) {
            var text = ui.item.AN + " (" + ui.item.AC + "), " + ui.item.CIN + ", " + ui.item.CON + " (" + ui.item.COA + ")";
            $("#tbFrom").val(text);
            $("#hvFrom").val(ui.item.AC);
            $('#tbTo').focus();
            return false;
        }
    })
       .autocomplete("instance")._renderItem = function (ul, response) {
           var autoSuggest = "<li data-code='" + response.AC + "' class='" + response.P + "'>" + response.AN + " (" + response.AC + "), " + response.CIN + ", " + response.CON + " (" + response.COA + ")</li>";// response.autosuggest;
           var formattedText = autoSuggest;
           return $("<li class='airList'>")
              .append(" ")
              .append(formattedText)
              .appendTo(ul);
       },
     $('#tbTo').autocomplete({
         autoFocus: true,
         minLength: 3,
         source: function (request, response) {
             var searchText = document.getElementById('tbTo').value.trim();
             $.ajax({
                 type: "POST",
                 global: false,
                
                 url: "/Flight/GetAutoSuggestion",
                 data: "{searchCode:'" + (searchText) + "'}",
                 contentType: "application/json; charset=utf-8",
                 success: function (result)
                 {
                     if (result.toString().indexOf("Invalid") == -1)
                     {
                        var jsonData = JSON.parse(result);
                         response(jsonData);
                     }
                 },
                 error: function (result) {
                 }
             });
         },

         open: function () {
         },
         //focus: function (event, ui) {
         //    var text = ui.item.AN + " (" + ui.item.AC + "), " + ui.item.CIN + ", " + ui.item.CON + " (" + ui.item.COA + ")";
         //    $("#tbTo").val(text);
         //    $("#hvTo").val(ui.item.AC);
         //    return false;
         //},
         change: function () {
             if ($("#tbTo") == undefined || $("#tbTo") == "") {
                 $("#hvTo").val("");
             }
             return false;
         },
         blur: function (event, ui) {
             var text = ui.item.AN + " (" + ui.item.AC + "), " + ui.item.CIN + ", " + ui.item.CON + " (" + ui.item.COA + ")";
             $("#tbTo").val(text);
             $("#hvTo").val(ui.item.AC);
             return false;
         },
         select: function (event, ui) {
             var text = ui.item.AN + " (" + ui.item.AC + "), " + ui.item.CIN + ", " + ui.item.CON + " (" + ui.item.COA + ")";
             $("#tbTo").val(text);
             $("#hvTo").val(ui.item.AC);
             if ($('#tbDepart').val() == "") {
                 $('#tbDepart').focus()
             }
             return false;
         }


     })
   .autocomplete("instance")._renderItem = function (ul, response) {
       var autoSuggest = "<li data-code='" + response.AC + "' class='" + response.P + "'>" + response.AN + " (" + response.AC + "), " + response.CIN + ", " + response.CON + " (" + response.COA + ")</li>";// response.autosuggest;
       var formattedText = autoSuggest;
       return $("<li class='airList'>")
          .append(" ")
          .append(formattedText)
          .appendTo(ul);
   }
    ,

    $("input[name='ddlTypejourney']").click(DisableReturnField),
    
    $("#tbDepart,#tbDepart1").datepicker({
        minDate: 0,
        maxDate: "+1y",
        dateFormat: "dd-M-y",
        defaultDate: "dd-MM-yyyy",
        onClose: function (e) {
           if (e != "") {
                $("#tbReturn").datepicker("option", "minDate", e);
                $("#tbReturn1").datepicker("option", "minDate", e);
            }
            else {
                $("#tbReturn").datepicker("option", "minDate", new Date());
                $("#tbReturn1").datepicker("option", "minDate", new Date());

            }

        }
    })
    ,
       //.datepicker("setDate", GetDate(7))
       $("#tbReturn").datepicker({
           minDate: 0,
           maxDate: "+1y",
        dateFormat: "dd-M-y"

       })
      //.datepicker("setDate", GetDate(14))
    ,

$("#tbHotelCheckIn").datepicker({
        minDate: 0,
        dateFormat: "dd-M-y",
        defaultDate: "+4d",
        dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        onClose: function (e) {
            $("#tbHotelCheckOut").datepicker("option", "minDate", e)
        }
    }).datepicker("setDate", GetDate(7)), $("#tbHotelCheckOut").datepicker({
        minDate: 0,
        dateFormat: "dd-M-y",
        defaultDate: "+11d",
        dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        onClose: function (e) {
            $("#tbHotelCheckIn").datepicker("option", "maxDate", e)
        }
    }).datepicker("setDate", GetDate(14)), $("#btnHotelSearch").click(function () {
        var e = $("#ddlHotelDestination").val().trim();
        "" != e && ($(this).attr("disabled", "disabled").html("Processing..."), sTarget = "Hotels", $("#cbIncludeFlights").is(":checked") && (sTarget = "Holidays"), window.location = "/" + sTarget + "/" + e + ".aspx?Night=" + $("#ddlHotelNights").val())
    })
}), $(window).load(function ()
{
    //$("#tbDepart,#tbReturn").val("")
}), $(window).load(function () {
    $(".hasDatepicker").on("click", function () {
        e()
    });
    var e = function () {
        $("#ui-datepicker-div .ui-datepicker-calendar a").on("click", function () {
            $(".hasDatepicker + label.error").css("display", "none"), $(".hasDatepicker").removeClass("error")
        })
    }
}), $(".callNowBtn").click(function () {
    return $("html, body").animate({
        scrollTop: 0
    }, "slow"), !1
}), $(".inner-nav.desktop-nav ul li > .mn-sub li:nth-child(1) > a span").addClass("active"), $(".inner-nav.desktop-nav ul li .mn-sub li > a span").on("click", function () {
    var e = $(this).attr("data-id");
    $(".inner-nav > ul > li.megamenu ul li li a span").removeClass("active"), $(this).addClass("active"), $(".destulholder ul").hide(), $(this).parent().parent().parent().parent().siblings("#menu-item-26").children(".destulholder").children("#" + e).show()
}), $(".clicktoslide").on("click", function () {
    $(this).next(".willslide").slideToggle(), $(this).toggleClass("active")
}), $(".destulholder ul li a").click(function () {
    $(this).parent().parent().parent().parent().parent().fadeOut()
}), $(window).load(function () {
    $("#dvCheckCookies").parent().addClass("close-button-of")
}), $(document).ready(function () {
    $(".closeinstantcall").click(function (e) {
        $(".disnone").removeClass("display-block"), e.preventDefault(), $(".phonering-alo-phone").removeClass("display-none")
    }), $(".inactivity_ok").click(function (e) {
        $(this).parent().parent().parent().hide()
    }), $(".mob-search").click(function (e) {
        $(".leftSearchSec").fadeToggle(), $(".mob-search i").toggleClass("fa-search fa-times"), $(this).toggleClass("mob-backbtn"), e.preventDefault()
    }), $(".mob-filter").click(function (e) {
        $(".filter-area").fadeToggle(), $(".filter-head").fadeToggle(), $(".mob-filter i").toggleClass("fa-filter fa-times"), $(this).toggleClass("mob-searchbtn"), e.preventDefault()
    }), $(".mob-bell").click(function (e) {
        $(this).parent().parent().parent().parent().parent().find(".singup-box").toggleClass("singupbox-popup"), $(".overlayout").fadeToggle(), $(".crose-sign").fadeToggle(), e.preventDefault()
    }), $(".crose-sign").click(function (e) {
        $(this).fadeOut(), $(this).parent().find(".singup-box").removeClass("singupbox-popup"), $(".overlayout").fadeOut(), e.preventDefault()
    }),

    $(".call-icon-wrap").click(function (e)
    {
        $(".tel-top").slideToggle("slow"),
        $(".fa-phone").toggleClass("display-none"),
         $(".fa-phone").parent().parent().parent().parent().parent().find('.call-to-phone').toggleClass('showdivbox');
        $(".fa-times").toggleClass("display-block"),
        e.preventDefault()
    }),

    $(".callusbtn").click(function (e) {
        $("#callusphone").val('');
        $("#contactuserror").html("");
        $(".call-to-phone").hide();
        if ($(window).width() < 767) {
        
        }
        else {
           $(".call-to-phone").toggleClass('buttonondiv');
       }
       
 $("#callusphone").focus();
        $(".callusbtn i ").toggleClass("fa-angle-down fa-angle-up "), e.preventDefault()
    }),

    $(".phonering-alo-ph-img-circle").click(function ()
    {
        $("#btnCloseCallBack").click();
        $("#callusphone1").focus();
        $("#callusphone1").val('');       
        $("#contactuserror1").html("");
        $('#timeout').dialog('close')
        
    })

    $(".closeit").click(function (e)
    {
        $(".callusbtn i ").toggleClass("fa-angle-down fa-angle-up ")
        $("#callusphone").val("");
        e.preventDefault()
    }),


    $(".modified-searchlisting").click(function (e) {
        var t = $(this);
        t.toggleClass("modifyactive"), t.hasClass("modifyactive") ? t.html("Modified  <i class='fa fa-angle-down'></i>") : t.html("Close <i class='fa fa-angle-up'></i>"), $(".searchforlisting").toggle(), $(".outerdiv").parent().parent().toggleClass("searchheiht"), e.preventDefault()
    }), $(".tbDepart1").datepicker({
        minDate: 0,
        maxDate: "+1y",
        dateFormat: "dd-M-y",
        defaultDate: "+4",
        dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        onClose: function (e) {
            $(".tbReturn1").datepicker("option", "minDate", e)
        }
    }).datepicker("setDate", GetDate(7)), $(".tbReturn1").datepicker({
        minDate: 0,
        maxDate: "+1y",
        dateFormat: "dd-M-y",
        defaultDate: "+11",
        dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    }).datepicker("setDate", GetDate(14)),
   
    $("#tbFrom").on("keyup", function (e) {
        $(".input-group-circle.one").fadeIn(), e.preventDefault()
    }),

     $(".input-group-circle.one").on("click", function (e) {
         $("#hvFrom").val("")
         $("#tbFrom").val("")
         $("#tbFrom").focus();
         e.preventDefault()
     }),

    $(".input-group-circle.two").on("click", function (e) {
        $("#tbTo").val("")
        $("#hvTo").val("")
        $("#tbTo").focus();
        e.preventDefault()
    }),
    $("#tbTo").on("keyup", function (e) {
        $(".input-group-circle.two").fadeIn(), e.preventDefault()
    }),

    //---------------------<-For Clear-->-------------------------
        $("#tbFrom").on("keydown", function (e)
        {
            if((e.keyCode == 46 || e.keyCode == 8) || e.keyCode == 46)
            {
                if ($(this).val().length > 0)
                {
                    $("#hvFrom").val("");
                    $(this).focus();
                }
                else
                {
                    $(".input-group-circle .one").hide()
                }
            }
            
        });

        $("#tbTo").on("keydown", function (e)
        {
            if ((e.keyCode == 46 || e.keyCode == 8) || e.keyCode == 46)
            {
                if ($(this).val().length > 0)
                {
                    $("#hvTo").val("");
                    $(this).focus();
                }
                else
                {
                    $(".input-group-circle .two").hide()
                }
            }
        });
    //---------------------<-For Clear-->-------------------------


    $(".callInfo h3 i.fa-times").on("click", function (e) {
        $(".callicon").removeClass("openform"), e.preventDefault()
    }),
    $(".input-group-circle").on("click", function (e) {
        $(this).fadeOut(), e.preventDefault()
    }), $(".close-btn").on("click", function (e) {
        e.preventDefault(), $(".pricebreakpop").fadeOut(), $(".blkoverlay").fadeOut()
    }), $(".slider-info-item:last-child").hover(function () {
        $(".callicon").fadeOut()
    }, function () {
        $(".callicon").fadeIn()
    });
}), $(function () {
    $("#timeout").parent().parent().addClass("expand-popup"), $("#timeout").find(".ui-dialog").addClass("expand-popup4"), $(".booking-list").find(".booking-item-container").parent().addClass("removebox")
}), $(window).load(function () {
    $(window).width() < 600 && ($(".telnum").removeClass("callNow"), $(".time-demob .landing h5 + h5").filter(function (e) {
        return 1 == parseInt(this.firstChild.textContent)
    }).addClass("numshowDiv")), $("#cphFull_lblMsg").find("h5 i").addClass("fa fa-phone"), $("#dealBlock .flight-listing").find(".flight-list-view").parent().addClass("list-remove-box")
}), $(window).load(function () {
    $(".hasDatepicker").on("click", function () {
        e()
    });
    var e = function () {
        $("#ui-datepicker-div .ui-datepicker-calendar a").on("click", function () {
            $(".hasDatepicker + label.error").css("display", "none"), $(".hasDatepicker").removeClass("error")
        })
    };
    $(".mob-search-site h4 span").find("b").parent().addClass("forreturnonly"), $(".booking-list > #popupArrDate + .listing-page-outin").parent().parent().parent().addClass("removemsg"), $(".listing-page-outin").parent().parent().parent().addClass("removemsg"), $(".list-content").find(".OutBound + .InBound").parent().parent().parent().parent().parent().addClass("callusnowoneway"), $(".list-content").find(".OutBound").parent().parent().parent().parent().parent().parent().parent().parent().addClass("relmsg")
}), $(".flight-list-view .book a").on("click", function () {
    var e = $(this).offset().top;
     $(".searchHolder").fadeIn(), $(".searchHolder").css("top", e + -65);
    //var t = $(this).parents(".flight-book").siblings(".flight-desc").find(".landing").children("h4.dep").text(),
    //    a = $(this).parents(".flight-book").siblings(".flight-desc").find(".landing").children("h4.arr").text(),
    //    n = t.split(","),
    //    i = a.split(",");
    //$(".tbDepart1").val(n[1]), $(".tbReturn1").val(i[1])
}), $(".slider-info-item a.button").on("click", function (e) {
    $(this).parent().parent().parent().parent().parent().parent().parent().find(".hopmepagesearch").fadeToggle(), $(this).parent().parent().parent().parent().parent().parent().parent().find(".innerboxbg").fadeToggle();
    var t = $(this).parent().find("h3.title").html();
    $(".hopmepagesearch h3").html(t), e.preventDefault()
}), $(".hopmepagesearch .closewidget").on("click", function (e) {
    $(this).parent().parent().find(".innerboxbg").fadeOut(), e.preventDefault()
}), $(".innerboxbg").on("click", function (e) {
    $(this).fadeOut(), $(this).parent().find(".searchHolder").fadeOut(), e.preventDefault()
}), $(".closewidget").on("click", function () {
    $(".searchHolder").fadeOut()
}), $(".det_btn").on("click", function () {
    $(this).parent().parent().parent().find(".details-content-box").slideToggle("slow")
}), $(".wrappers1 .dtcl_btn").on("click", function () {
    $(this).parent().parent().parent().parent().parent().slideToggle("slow")
}), $("#infobooking-box").on("click", function () {
    $("#PopupRide").slideToggle("slow")
}), CommonUtility = {
    hideToolTip: function (e) {
        var t = $(e).attr("id");
        _.isEqual(t, "imgClose1") ? $("#divFlightNotAvailable").hide() : ($("#PopupRide").removeClass("opened"), $("#popupride_single").hide())
    },
    ShowArrTooltip: function (e, t) {
        var a, n, i = $(e).offset().top,
            o = $(e).offset().left;
        $("#popupArrDate").empty(), -1 !== t.indexOf("Arrives") ? $("#popupArrDate").html("<i class='fa fa-clock-o'></i><span class='fa fa-caret-down'></span>" + t) : $("#popupArrDate").html("<i class='fa fa-plane'></i><span class='fa fa-caret-down'></span>" + t), a = parseInt($("#popupArrDate").height(), 10) + parseInt($(e).height(), 10) + 10, n = parseInt($("#popupArrDate").width(), 10) / 2, $("#popupArrDate").show().css({
            top: i - (a + 402),
            left: o - (n + 995)
        }), $(e).css({
            cursor: "help"
        })
    },
    hideArrTooltip: function () {
        $("#popupArrDate").hide()
    }
}, $("#divModifySearch_new").click(function (e) {
    var t = $(this);
    t.toggleClass("modifyactive2"), t.hasClass("modifyactive2") ? t.html("modify  <i class='fa fa-angle-down'></i>") : t.html("Close <i class='fa fa-angle-up'></i>"), $(".leftSearchSec").fadeToggle(), e.preventDefault()
}), $(".filter-head i").click(function (e) {
    $(this).parent().parent().find(".filter-head").hide(), $(this).parent().parent().find(".filter-area").hide(), e.preventDefault()
}), $("#filterShowHide").click(function (e) {
    $(".filter-area").fadeToggle(), $(".filter-head").fadeToggle(), e.preventDefault()
}), $(".icon-button-deal i").bind("touchstart", function () {
    $("deal-infobutton").fadeIn()
}), $(".icon-button-deal i").bind("touchend", function () {
    $("deal-infobutton").fadeOut()
}), $(".ItineraryPartOverview + .spIcon.ic_unfold_more").click(function (e) {
    $(this).parent().find(".ItineraryPartDetail").toggleClass("_expanded"), $(this).toggleClass("fa-angle-down fa-angle-up"), e.preventDefault()
}), $(".footer_pp").slideUp(), $(".call_txt").fadeIn(), $(".footer_call > .fa-phone").click(function (e) {
    e.stopPropagation(), $(".footer_call > .crs").css("display", "block"), $(".footer_call > .fa-phone").css("display", "none"), $(".footer_pp").slideDown(), $(".footer_pp").find("#txtmobile3").val(""), $(".footer_call > .showmsg").css("display", "none")
}), $(".footer_call > .crs").click(function (e)
{
    e.stopPropagation(), $(".footer_call > .crs").css("display", "none"), $(".footer_call > .fa-phone").css("display", "block"), $(".footer_pp").slideUp(), $(".footer_pp").find("#txtmobile3").val(""), $(".footer_call > .showmsg").css("display", "none")
    $("#contactuserror1").html("");
    //$("#callusphone1").focus();
}),
$(".footer_call > .showmsg").find(".fa-times").click(function () {
    $(".footer_call > .showmsg").css("display", "none"), $(".footer_call > .fa-phone").css("display", "block"), $(".footer_call > .crs").css("display", "none")
}), $(".footer_call > span > .fa-times").click(function (e) {
    e.stopPropagation(), $(this).parent().fadeOut("slow")
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".callicon").addClass("callInfofixed");
    }
    else {
        $(".callicon").removeClass("callInfofixed");
    }

    $('.slider-info-wrap').mouseover(function () {
        $(this).css("z-index", "9");
    });

    $('.slider-info-wrap').mouseout(function () {
        $(this).css("z-index", "0");
    });

});

$(function () {
    $(".ausu-suggest").keyup(function () {
        $(".footer_call").css("display", "none");
    });

    $(".ausu-suggest").mouseout(function () {
        $(".footer_call").css("display", "block");
    });

    $(".ausu-suggestionsBox").mouseover(function () {
        $(".footer_call").hide();
    });

    $(".ausu-suggestionsBox").mouseout(function () {
        $(".footer_call").show();
    });
    $('.modify-box').click(function () { 
        $('.search-index-page').slideToggle('slow');
        $('.leftSearchHolder').toggleClass('topholderbg');
        $('.passangerCatogaryHolder').show();
        $('.advanceSearch').text("- Hide");
});

});

$('.booking-list').delegate('.js-modal-close', 'click', function (e) {
    $(this).parent().parent().parent().parent().removeClass('stack-item fade');
    $(this).parent().parent().parent().parent().parent().hide('slow');
    $('body').removeClass('addfixedonbody');
    e.stopPropagation()
});

//$('.trip-view .trip-border').click(function () {
$('.booking-list').delegate('.trip-view .trip-border', 'click', function (e) {
    $(this).parent().parent().parent().find('.modal-view--default').addClass('stack-item fade');
    $(this).parent().parent().parent().find('.model-pop-up').show('slow');
    $('body').addClass('addfixedonbody');
    e.stopPropagation()
});
$('.modal-view.modal-view--default').click(function () {
    $(this).removeClass('stack-item fade');
    $(this).parent().hide('slow');
    $('body').removeClass('addfixedonbody');

});
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


//$(function () {
//    $(".travelerOpen.dropdown").click(function () {
//        $(".content-body").css("margin-top", "-260px");
//        //$(this).parent().addClass('.ddd')
//    });
//    $(".travelerOpen.dropdown").mouseout(function () {
//        //$(".content-body").css("margin-top", "0");
//    });
//});


//var body = $("html, body");
//$('#tbFrom, #tbTo').on('click', function () {
//    var searchsec = $('#formAirSearch').offset().top;
//    $("html, body").animate({ scrollTop: searchsec }, 400);
//    return false
//});

$('.timeout-popup.callinpopup #Text2').on('click', function () {
    $('.timeout-popup.callinpopup .bg-overlay').css('position', 'absolute');
});

$('.timeout-popup.callinpopup #Text2').on('blur', function () {
    $('.timeout-popup.callinpopup .bg-overlay').css('position', 'fixed');
});

var pageURL = window.location.toString().includes("/flights/");

if (pageURL) {
    $('.search-box.search-index-page').addClass('destination')
}


$('.search-index-page .input-group b').on('click', function () {
    $(this).next().find('input').click();
});

$(".dateSecHolder #divDFrom,.dateSecHolder #divDTo").html(function () {
    var text = $(this).text().trim().split(" ");
    var first = text.shift();
    return (text.length > 0 ? "<span class='disnone'>" + first + "</span> " : first) + text.join(" ");
});

$('.book-area').on('click', function () {
    $(this).parents('.booking-bottom-container').siblings('.detailsData').slideToggle();
});

$(document).delegate(".flightInfomore", "click", function (e) {
    $(".flightMoreinfoPopup").fadeOut();
    $(this).parent().parent().find('.flightMoreinfoPopup').fadeIn(500);    
    e.stopPropagation();
});

$(document).delegate(".closeflightMoreinfoPopup", "click", function (e) {
    $(this).parent().fadeOut(500);
    e.stopPropagation();
});

$('.closeSearchpanel').on('click', function ()
{
    $('.search-index-page').slideToggle('slow');
    $('.containerHolder .leftSearchHolder.topholderbg').removeClass('topholderbg');
    $('.please-s-or,.please-s-dest').hide();
    
});

var headerHeight = $("header").height();
$("header").wrap('<div class="wrapHeader"></div>');
$(".wrapHeader").height(headerHeight);


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("header").addClass("header-stiker");
    }
    else {
        $("header").removeClass("header-stiker");
    }
});

$('.advanceSearch').on('click', function () {
    $('.search-box .passangerCatogaryHolder').slideToggle(500);

    if ($(this).text() == "- Hide") {
        $(this).text("+ Advance Search")
    }
    else {
        $(this).text("- Hide")
    }

});

$('.modifyFilter').on('click', function () {

    if ($('.search-heading .modify-box + .search-box.search-index-page .search-visit').is(":visible")) {
        $('.leftSearchHolder').css('z-index', '999')
    }

    else {
  $('.leftSearchHolder').css('z-index', '0')
    }

   

    $('.leftSearchHolder').slideToggle('slow');
  });

if ($(".footerContiner").children(".footerTop").length == 1) {  

} else {

    $('.footerBottom').addClass('innerFooter')

}
$(document).ready(function () {
$('#formSubscribebutton').on('input change', function () {
    if ($(this).val() != '') {
        $('#btnSubscribe').prop('disabled', false);
        $('#btnSubscribe').parent().addClass('buttonbgcolor');
        $('#dvSubscribed').hide();
    }
    else {
        $('#btnSubscribe').prop('disabled', true);
        $('#btnSubscribe').parent().removeClass('buttonbgcolor');
    }
});
});

function ShowDealSearchPopup(obj, originCode, destCode, fromDate, toDate,cabinClass,airlineCode,isBusinessClassDeal) {
    $('#ddlAdultCount1').val(1); 
    $('#ddlChildCount1').val(0);
    $('#ddlInfantOnLap1').val(0);
    $('#ddlAdultCount1').removeClass("error");
    $('#ddlChildCount1').removeClass("error");
    $('#ddlInfantOnLap1').removeClass("error");
    $('.pax-ratio1').hide();
    $('.adult-infant1').hide();
    $('.searchHolder').fadeIn();
    var calTop = $(obj).offset().top;
    var calLeft = $(obj).offset().left;
    var calright = $(obj).offset().left;
    $('.searchHolder').css('top', calTop-40)
    $('.searchHolder').css('left', calLeft - 214)

    $('body,html').animate({
        scrollTop: calTop - 80
    }, 500)

    $('.searchHolder.business').css('top', calTop -40)
    $('.searchHolder.business').css('left', calright - 220)

    $("#hvFrom1").val(originCode);
    $("#hvTo1").val(destCode);
    $("#tbDepart1").val(fromDate);
    $("#tbReturn1").datepicker("option", "minDate", fromDate);
    $("#tbReturn1").val(toDate);
    $("#hvIsDeal").val('Yes');

    

    if (isBusinessClassDeal != null && isBusinessClassDeal == true)
    {
        $('#divShortWidgetTitle').html("Book " + cabinClass + " Class Flights");
        $("#hvIsBusinessClassDealShort").val('true');
    }
    if (cabinClass != null || cabinClass != undefined)
        {
        $("select[name*='ddlCabinClass']").val(cabinClass);
        $("#ddlAirline1").val(airlineCode);
    }
    else
    {
        $("#ddlAirline1").val('All');
    }
}

$(".readMore").click(function (e) {
    e.preventDefault();
    $(this).siblings('.classContentHolder').toggleClass('expandTxt');
    if ($(this).text() === "Read More") {
        $(this).text("Hide");
    }
    else {
        $(this).text("Read More");
    }
});

$(".businessClassHolder .farePricetable ul li").click(function (e) {
    e.preventDefault();
    $(".businessClassHolder .farePricetable ul li").removeClass('active');
    $(this).addClass('active');
});

$('.businessClassHolder .farePricetable ul li b').on('click', function () {
    var bookBtn = $(this).offset().top;
    $('html,body').animate({ scrollTop: bookBtn - 30 }, 'slow');
});

$('.showhidecntnt').on('click', function () {
    $(this).toggleClass('cntntheightAuto');
});

$('.callmelaterddd').on('click', function ()
{
    $('#tab2').show();
    $('#tab1').hide();
    $(this).addClass('active');
    $('.callmenow').removeClass('active');
});

$('.callmenow').on('click', function () {
    $('#tab1').show();
    $('#tab2').hide();
    $(this).addClass('active');
    $('.callmelater').removeClass('active')
});

$('.crs').on('click', function ()
{
  
    $('.blkoverlay1').hide();
    
    BacktoCallMeNow();
});

$('.pps-btn-img').on('click', function () {   
    $('.blkoverlay1').show();
});

$('.blkoverlay1').on('click', function ()
{
    $('.crs').click();
    

});


function OpenCallCallMeFooter()
{
    $("#timeout").dialog('close');
}


$('#tbDepart, #tbReturn').wrap('<div class="inpwrapper"></div>')

$('.input-group-addon').on('click', function () {
    $(this).siblings('input').click();
})

function getval() {
    var s = $('#tbTo').val();
    if (s != "") {
        $('.input-group-circle.two').show();
    }
}

$(window).load(function () {
    setTimeout(getval(), 1000)
});

function getval1() {
    var s = $('#tbFrom').val();
    if (s != "") {
        $('.input-group-circle.one').show();
    }
}

$(window).load(function () {
    setTimeout(getval1(), 1000)
});

//$('.showDetails').on('click', function () {
//    alert('cstm');
//    $('.clickpopup').click();
//});

$('.modifySearchBtn').on('click', function ()
{
    $(this).next('section').slideToggle();
});

$("#tbFrom,#tbTo,input[type=text]:not('#callusphone1')").on("click", function (e) {
    $('.45').css('z-index', '-1');
});

$("input[type=text]").on("blur", function (e) {
    $('.footer_call').css('z-index', '9999');
});

///=======new functiopns======Validate Phone with start zero
function validateMobileZeroStart(TargetControlID, TargetErrorID, ErrorMessage) {
    $('#' + TargetErrorID).show();
    $('#' + TargetErrorID).html();
    var phone = $('#' + TargetControlID).val();

    if (startsWith(phone, "00"))
    {
        $('#' + TargetErrorID).html(ErrorMessage);
        return false;
    }
    else {
        return true;
    }
}

///=========Validate|restrict copy paste in phone field 
$('#callusphone1,#callusphone,#rf_phone,#txtPhone,#callusphoneTimeOut,#callusphoneCallBackError').on('input', function (e)
{
    $(this).val(function (i, v) {
        return v.replace(/[^\d]/gi, '');
    });
});

$('.callmelaterdasdsa').on('click', function ()
{
    $('#tab2').show();
    $('#tab1').hide();
    $(this).addClass('active');
    $('.callmenow').removeClass('active');
});

$('.callmenowdasdsad').on('click', function () {
    $('#tab1').show();
    $('#tab2').hide();
    $(this).addClass('active');
    $('.callmelater').removeClass('active')
});
$('#callusphoneTimeOut').on('focus', function () {
    $('.expand-popup .ui-dialog').css('position', 'absolute');
})
$('#callusphoneTimeOut').on('blur', function () {
    $('.expand-popup .ui-dialog').css('position', 'fixed');
});