import { Authority } from './../../_models/authority';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthorityService } from 'src/app/_services/authority.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-authority',
  templateUrl: './authority.component.html',
  styleUrls: ['./authority.component.css']
})
export class AuthorityComponent implements OnInit {

  authorities: Authority[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private toastr: ToastrService,private route: ActivatedRoute,private authorityService: AuthorityService) { }

  ngOnInit(): void {
    this.authorityService.list().subscribe((authorities: Authority[]) => {
      this.authorities = authorities;
      this.dtTrigger.next();
    });
  }

  removeAuthority(id) {
    this.authorityService.remove(id).subscribe((removedId: Number) => {
      this.authorities = this.authorities.filter(item => item.id !== id);
      this.toastr.error( 'Authority with id ' + removedId + " has been removed.",'Authority Master');
    });
  }

}
