import cereal from "../images/cereal_b.jpg";
import flower from "../images/flower_b.jpg";
import machine from "../images/machine_b.jpg";
import candy from "../images/candy_b.jpg";
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";

export const statesData = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

export const midSectionData = [
  {
    title: "Cras ac Mauris",
    description:
      "nteger dictum hendrerit pharetra. Cras fermentum posuere egestas."
  },
  {
    title: "Curabitur elementum",
    description:
      "Cras vel imperdiet mauris. Pellentesque libero mauris, interdum a felis et, condimentum mattis erat."
  },
  {
    title: "Awards and Recognitions",
    description:
      "Aliquam eget ligula mauris. Etiam viverra non turpis eu auctor. Nullam pretium est libero, et condimentum massa egestas id."
  },
  {
    title: "Morbi placerat",
    description:
      "Nam feugiat ultrices ligula eget faucibus. Mauris convallis ipsum est."
  },
  {
    title: "Suspendisse eu",
    description: "Duis pretium elementum dui, id feugiat neque facilisis vel."
  },
  {
    title: "Integer faucibus",
    description:
      "Vivamus at rutrum est, eu pellentesque lacus. Curabitur imperdiet tortor sit amet enim ullamcorper, a aliquet odio rutrum."
  }
];

export const bottomSectionData = [
  {
    title: "Product Title 1",
    price: 500,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    picture: cereal
  },
  {
    title: "Product Title 2",
    price: 1900,
    description:
      "Donec ornare magna sit amet erat molestie sollicitudin ac vitae lectus.",
    picture: flower
  },
  {
    title: "Product Title 3",
    price: 2730,
    description: "Cras non metus sed odio tristique imperdiet.",
    picture: machine
  },
  {
    title: "Product Title 4",
    price: 731,
    description: "Pellentesque mattis tellus ut molestie dapibus.",
    picture: candy
  }
];

export const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim neque, molestie ut placerat id, tincidunt in sem. Pellentesque sodales lobortis eros nec pulvinar. In ac ultrices ipsum, ultricies semper nisi. Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac, iaculis ipsum.
Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac, iaculis ipsum`;

const style = {
  color: "#002b5a",
  fontSize: 13
};

export const filterOptions = [
  {
    value: null,
    label: "All",
    style
  },
  {
    value: [500, null],
    label: "$500 or less",
    style
  },
  {
    value: [500, 1000],
    label: "From $500 to $1000",
    style
  },
  {
    value: [1000, 2000],
    label: "From $1000 to $2000",
    style
  },
  {
    value: [null, 2000],
    label: "$2000 or more",
    style
  }
];

export const bulletPointData = [
  {
    pic: one,
    value: 1,
    desc: "lkjuhdfiguhdifugh sdfsdf"
  },
  {
    pic: two,
    value: 2,
    desc: "lkjuhdfiguhdifugh sdfsdf"
  },
  {
    pic: three,
    value: 3,
    desc: "lkjuhdfiguhdifugh sdfsdf"
  }
];
