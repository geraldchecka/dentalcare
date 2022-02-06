import { useState } from 'react';
import Link from 'next/link';

export default function CustomDropDown() {
  const [ items, setItems ] = useState([
    { 
      value: "Single Sitting Root Canal",
      id: 1,
      href: "/rootcanal",
    },
    { 
      value: "Dental Implants",
      id: 2,
      href: "/dental-implants",
    },
    { 
      value: "Orthodontics",
      id: 3,
      href: "/orthodontics",
    },
    { 
      value: "Dental Fillings",
      id: 5,
      href: "/dental-fillings",
    },
    { 
      value: "Dentures",
      id: 5,
      href: "/dentures",
    },
    { 
      value: "Exraction and Impaction",
      id: 6,
      href: "/extraction-and-impaction",
    },
    { 
      value: "Laser Gum Treatment",
      id: 7,
      href: "/laser-gum-treatment",
    },
    { 
      value: "Cosmetic Fillings",
      id: 8,
      href: "/cosmetic-fillings",
    },
    { 
      value: "Dental X-Rays",
      id: 9,
      href: "/dental-xrays",
    },
    { 
      value: "Dental Crowns and Bridges",
      id: 10,
      href: "/dental-crowns",
    },
    { 
      value: "Kids Dentistry",
      id: 11,
      href: "/kids-dentistry",
    },
  ]);
  const [ showItems, setShowItems] = useState(false);
  // const [ selection, setSelection] = useState();

  function dropDown() {
    setShowItems((state) => !state);
  }

  let showClass = showItems === true ? 'select-box--arrow-up' : 'select-box--arrow-down';

  return (
    <div className="select-box--box" onClick={dropDown}>
      <div className="select-box--container">
        <div className="select-box--selected-item">All Services</div>
        <div className="select-box--arrow"><span className={showClass}></span></div>
        <div className="select-box--items" style={{display: 'block'}}>
          {
            showItems && items.map((item) => {
              return (
                <div key={item.id}>
                  <Link href={item.href} passHref>
                    <a>{item.value}</a>
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}