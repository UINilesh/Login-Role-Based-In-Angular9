import { Component } from "@angular/core";
import { first } from "rxjs/operators";
import { User } from "@app/_models";
import { UserService, AuthenticationService } from "@app/_services";
import { Router } from "@angular/router";

@Component({ templateUrl: "home.component.html" })
export class HomeComponent {
  loading = false;
  currentUser: User;
  userFromApi: User;
  totalfilter: any;
  private sum = 0;
  private value;
  public data = [
    {
      id: 201,
      name: "Nulla",
      price: 207,
      subCategoryId: 101,
      categoryId: 1,
      rate: 2.44,
      content:
        "Culpa sed tenetur incidunt quia veniam sed mollitia exercitationem. Laboriosam reprehenderit laborum pariatur ea rem qui inventore. In asperiores dignissimos temporibus et. Beatae consequatur corrupti nam praesentium.",
      review: 78,
      typeVariant: "D",
      colorVariant: "5",
      imageUrl: "https://dummyimage.com/556x985",
    },
    {
      id: 202,
      name: "Nulla",
      price: 333,
      subCategoryId: 102,
      categoryId: 1,
      rate: 3.1,
      content:
        "Culpa sed tenetur incidunt quia veniam sed mollitia exercitationem. Laboriosam reprehenderit laborum pariatur ea rem qui inventore. In asperiores dignissimos temporibus et. Beatae consequatur corrupti nam praesentium.",
      review: 1,
      typeVariant: "D",
      colorVariant: "1",
      imageUrl: "https://dummyimage.com/556x985",
    },
    {
      id: 202,
      name: "Nulla",
      price: 333,
      subCategoryId: 102,
      categoryId: 1,
      rate: 3.1,
      content:
        "Culpa sed tenetur incidunt quia veniam sed mollitia exercitationem. Laboriosam reprehenderit laborum pariatur ea rem qui inventore. In asperiores dignissimos temporibus et. Beatae consequatur corrupti nam praesentium.",
      review: 1,
      typeVariant: "D",
      colorVariant: "1",
      imageUrl: "https://dummyimage.com/556x985",
    },
    {
      id: 202,
      name: "Nulla",
      price: 123,
      subCategoryId: 102,
      categoryId: 1,
      rate: 1,
      content:
        "Culpa sed tenetur incidunt quia veniam sed mollitia exercitationem. Laboriosam reprehenderit laborum pariatur ea rem qui inventore. In asperiores dignissimos temporibus et. Beatae consequatur corrupti nam praesentium.",
      review: 1,
      typeVariant: "D",
      colorVariant: "1",
      imageUrl: "https://dummyimage.com/556x985",
    },
    {
      id: 202,
      name: "Nulla",
      price: 422,
      subCategoryId: 102,
      categoryId: 1,
      rate: 2.1,
      content:
        "Culpa sed tenetur incidunt quia veniam sed mollitia exercitationem. Laboriosam reprehenderit laborum pariatur ea rem qui inventore. In asperiores dignissimos temporibus et. Beatae consequatur corrupti nam praesentium.",
      review: 1,
      typeVariant: "D",
      colorVariant: "1",
      imageUrl: "https://dummyimage.com/556x985",
    },
    {
      id: 202,
      name: "Nulla",
      price: 500,
      subCategoryId: 102,
      categoryId: 1,
      rate: 4.1,
      content:
        "Culpa sed tenetur incidunt quia veniam sed mollitia exercitationem. Laboriosam reprehenderit laborum pariatur ea rem qui inventore. In asperiores dignissimos temporibus et. Beatae consequatur corrupti nam praesentium.",
      review: 1,
      typeVariant: "D",
      colorVariant: "1",
      imageUrl: "https://dummyimage.com/556x985",
    },
    {
      id: 202,
      name: "Nulla",
      price: 333,
      subCategoryId: 102,
      categoryId: 1,
      rate: 3.1,
      content:
        "Culpa sed tenetur incidunt quia veniam sed mollitia exercitationem. Laboriosam reprehenderit laborum pariatur ea rem qui inventore. In asperiores dignissimos temporibus et. Beatae consequatur corrupti nam praesentium.",
      review: 1,
      typeVariant: "D",
      colorVariant: "1",
      imageUrl: "https://dummyimage.com/556x985",
    },
  ];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loading = true;
    this.userService
      .getById(this.currentUser.id)
      .pipe(first())
      .subscribe((user) => {
        this.loading = false;
        this.userFromApi = user;
      });

    this.add(this.data);
    this.totalfilter = this.data.length;
  }

  add(data) {
    this.value = data;
    for (let j = 0; j < data.length; j++) {
      this.sum += this.value[j].price;
    }
  }
}
