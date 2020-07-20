
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MatSnackBar } from '@angular/material/snack-bar';
export class CommonMethods {



    public static showconsole(tag: string, message: string) {
        console.log(tag, message);
    }


    static showErrorDialog(snackBar: MatSnackBar, message: string) {
      snackBar.open(message, "", {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: ['blue-snackbar']
      });
  }


  /*
      Show Success Dialog Message Common Method
*/

static showSuccessDialog(snackBar: MatSnackBar, message: string) {
  snackBar.open(message, "", {
      duration: 3000,
      panelClass: ['sucess-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'right',
  });
}


  /**
 * Sweet Alert   Show    
 */
static opensweetalert(message: any) {
    Swal.fire({
      text: message,
      icon: 'success'
    });
  }
  static  opensweetalertError(message: any) {
    Swal.fire({
      text: message,
      icon: 'error'
    });
  }

}