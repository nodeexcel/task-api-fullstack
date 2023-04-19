import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  const socialData = ['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'Tiktok', 'Youtube', 'Medium']
  const rightSection = {
    first: ['Terms of use', 'Privacy notice', 'Security notice', 'Contact us'],
    second: ['Press', 'Blog', 'FAQs', 'Support']
  }
  return (
    <section className={`text-white p-3 ${styles.mainDiv}`}>
      <div className='row p-5'>
        <div className='col-md-8 col-sm-12 d-flex flex-wrap flex-column'>
          <div className='d-flex justify-content-md-start justify-content-center'>
            <img src='/assets/images/home/footerLogo.svg' height={80} width={80} alt='logo' />
          </div>
          <div className='d-flex flex-wrap justify-content-md-start justify-content-center pt-sm-1'>
            {socialData.map((data) => {
              return (
                <div className={styles.SocialMedia}>
                  {data}
                  <img src='/assets/images/home/arrow.svg' width={22} height={22} />
                </div>
              )
            })}
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className='row text-white opacity-50'>
            <div className='col-md-6 col-sm-12  text-md-start text-center'>
              {rightSection.first.map((data) => {
                return (
                  <div className='fs-5 mt-3'>{data}</div>
                )
              })}
            </div>
            <div className='col-md-6 col-sm-12 text-md-start text-center'>
              {rightSection.second.map((data) => {
                return (
                  <div className='fs-5 mt-3'>{data}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={`row text-white opacity-50 ${styles.head}`}>
        <div className={`col-12 ${styles.subHead}`}>
          Plena and the articles contained herein (the “Website”) is for informational purposes only. Please do not construe any such information or material on this Website as legal, tax, investment, financial, or other advice. This Website and the information contained herein is not an endorsement of any digital asset, protocol, network, or project. The risk of loss in cryptocurrency can be substantial and nothing herein is intended to be a guarantee against the possibility of loss. This Website and the content contained herein are based on information which is believed to be reliable and has been obtained by sources believed to be reliable, but Plena Ltd. makes no representation or warranty, express or implied, as to the fairness, accuracy, adequacy, reasonableness, or completeness of such information. Plena Ltd. cannot be responsible, in any way whatsoever, for your use of the information contained herein or linked from this Website. Any use of Plena Ltd. services are at all times subject to and governed by Plena Ltd. policies, including, without limitation, its Terms of Service and Privacy Policy, as may be amended from time to time.
        </div>
      </div>
    </section>
  )
}

export default Footer
