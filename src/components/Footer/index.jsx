import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  const socialData = ['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'Tiktok', 'Youtube', 'Medium']
  const rightSection = {
    first : ['Terms of use','Privacy notice','Security notice','Contact us'],
    second : ['Press','Blog','FAQs','Support']
  }
  return (
    <section className={`text-white p-3 ${styles.mainDiv}`}>
      <div className='row p-5 d-flex'>
        <div className='col-8 d-flex flex-wrap'>
          <div className='d-flex justify-content-start'>
            <img src='/assets/images/home/footerLogo.svg' height={80} width={80} alt='logo' />
          </div>
          <div className='d-flex flex-wrap justify-content-start pt-5'>
            {socialData.map((data) => {
              return (
                <div className={styles.SocialMedia}>
                  {data}
                  <img src='/assets/images/home/arrow.svg' width={22} height={22}/>
                </div>
              )
            })}
          </div>
        </div>
        <div className='col-4'>
          <div className='row'>
            <div className='col-6'>
                {rightSection.first.map((data)=>{
                  return(
                    <div className='fs-5 mt-3'>{data}</div>
                  )
                })}
            </div>
            <div className='col-6'>
            {rightSection.second.map((data)=>{
                  return(
                    <div className='fs-5 mt-3'>{data}</div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className={`row ${styles.head}`}>
        <div className={`col-12 ${styles.subHead}`}>
          Plena and the articles contained herein (the “Website”) is for informational purposes only. Please do not construe any such information or material on this Website as legal, tax, investment, financial, or other advice. This Website and the information contained herein is not an endorsement of any digital asset, protocol, network, or project. The risk of loss in cryptocurrency can be substantial and nothing herein is intended to be a guarantee against the possibility of loss. This Website and the content contained herein are based on information which is believed to be reliable and has been obtained by sources believed to be reliable, but Plena Ltd. makes no representation or warranty, express or implied, as to the fairness, accuracy, adequacy, reasonableness, or completeness of such information. Plena Ltd. cannot be responsible, in any way whatsoever, for your use of the information contained herein or linked from this Website. Any use of Plena Ltd. services are at all times subject to and governed by Plena Ltd. policies, including, without limitation, its Terms of Service and Privacy Policy, as may be amended from time to time.
        </div>
      </div>
    </section>
  )
}

export default Footer
