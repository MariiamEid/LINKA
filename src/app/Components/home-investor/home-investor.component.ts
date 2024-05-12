import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { AllPostService } from '../../Services/all-post.service';
interface User {
  userName: string;
}
@Component({
  selector: 'app-home-investor',
  templateUrl: './home-investor.component.html',
  styleUrl: './home-investor.component.css'
})

export class HomeInvestorComponent {
  constructor(private router: Router) {}
  redirectToAnotherPage(): void {
    this.router.navigate(['send-offer']);
  }
  users: User[] = [
    { userName: 'John Doe' },
    { userName: 'Jane Smith' },
    { userName: 'Alice Johnson' },
  ];

  filteredUsers!: User[];

  filterUsers(searchTerm: string) {
    this.filteredUsers = this.users.filter((user) =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}


