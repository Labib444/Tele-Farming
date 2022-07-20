	$(document).ready(function () {
		$(function () {

			$('#email_input').keyup(function () {
				//                    $('#email_input_span').text($('#email_input').val() + ' ' + $('#email_input').val());				
				validateEmail();
			});

			$('#password_input').keyup(function () {
				//                    $('#email_input_span').text($('#email_input').val() + ' ' + $('#email_input').val());				
				validateEmpty();
			});

			$('.sign_up_button').click(function () {
				submitForm();
			});

		});


        });

		function validateEmail() {
			const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var valid = re.test(String( $('#email_input').val() ).toLowerCase());
			if( !valid )
				$('#email_input_p').text( "Please enter a valid email address." );
			else
				$('#email_input_p').text( "" );
			return valid;
		}

		function validateEmpty() {
			var valid;

			if( $('#password_input').val() == 0 )
				valid = false;
			else
				valid = true;

			if( !valid )
				$('#password_input_p').text( "This field cannot be empty." );
			else
				$('#password_input_p').text( "" );
			return valid;
		}

		function submitForm() {
			if ( validateEmail() && validateEmpty() ) {
				//var valdata = $("#form").serialize();
				////to get alert popup   
				//alert(valdata);
				//$.ajax({
				//	url: "/Farmers/Login",
				//	type: "POST",
				//	dataType: 'json',
				//	contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
				//	data: valdata
				//});
				$('#sign_up_button').get(0).type = 'submit';
			}
				//$('#form').submit();
			else
				$('#submit_input_p').text( "Please enter the fields properly." );
		}

