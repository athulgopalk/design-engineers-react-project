import React from 'react'
import { Accordion,AccordionItem,AccordionItemHeading,
         AccordionItemButton ,
         AccordionItemState,
         AccordionItemPanel} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'

const Value = () => {
  return (
    <section className="v-wrapper" id="V1">
      <div className="paddings innerWidth flexCenter v-container">
        {/* leftside */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* rightside */}

        <div className="flexColStart v-right">
          <span className="orangeText heading">Our Vision</span>
          <span className="primaryText heading">Bringing Dreams to Life</span>
          <span className="secondaryText">
            At Solid Homes, we don't just build houses; we create homes that
            embody your dreams,
            <br />
            anchored in trust, respect, and the beauty of Bedakam's landscape.
          </span>

          <span className="orangeText heading">Our Mission</span>
          <span className="primaryText heading">Affordable Dream Homes for All</span>
          <span className="secondaryText">
            We are committed to providing high-quality, budget-friendly homes,
            <br />
            ensuring that every family can build a legacy in the heart of their
            community.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[data[0].id]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className="accordionItem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className=" flexCenter accordionButton">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading} </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value
