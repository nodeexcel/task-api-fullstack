import React from 'react'
import styles from "@/styles/home/FeaturesSection.module.css"
import Image from 'next/image'


const RightInner = () => <div className='row'>
  <div className='col-6'>
    <div className='d-flex flex-col-reverse'>

    <Image src={"/assets/images/home/lending.svg"} width={200} height={200} alt='lending' />
    </div>
    <div>
      <div className={styles.heading}>Lending Protocol</div>
      <div className={styles.subHeading}>Earn Interest with Top Protocols in the Industry with Just a Tap!</div>

    </div>
  </div>
  <div className='col-6'>
    <Image src={"/assets/images/home/stake.svg"} width={200} height={200} alt='stake' />
    <div className={styles.heading}>Stake your assets</div>
    <div className={styles.subHeading}>Earn Interest with Top Protocols in the Industry with Just a Tap!</div>

  </div>
</div>

const RightSide = () => <div className='col'>
  <div className='row'>
    <div className='col-12 mb-5'>
      <RightInner />
    </div>
    <div className='col-12 d-flex'>
      <div>
        <div className={styles.heading}>Liquidity Pools</div>
        <div className={styles.subHeading}>Enjoy the best exchange rates across all decentralized exchanges in one place!</div>
      </div>
      <Image src={"/assets/images/home/pools.svg"} width={200} height={200} alt='pools' />
    </div>
  </div>
</div>

const LeftSide = () => <div className='col justify-content-center align-items-center d-flex flex-column'>
  <div>
    <Image src={"/assets/images/home/swap.svg"} width={200} height={200} alt='swap' />
    <div className={styles.heading}>
      Swap Crypto with ease
    </div>
    <div className={styles.subHeading}>Swap smarter, not harder with Plena Finance - fast, safe, and competitive crypto swaps.</div>
  </div>
</div>




const FeaturesSection = () => {
  return (
    <div className='container'>
      <div className='row'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  )







  return (
    <div className={styles.featureDiv}>
      <div>Features Like Never Seen Before</div>

      {/* <div class="container text-center">
        <div class="row">
          <div class="col">
            Column
          </div>
          <div class="col">
            <div class="row">
              <div class="col">
                Column
              </div>
              <div class="col">
                Column
              </div>
              <div class="col">
                Column
              </div>
            </div>
          </div>
          <div class="col">
            Column
          </div>
        </div>
      </div> */}

      <div className={styles.tableDiv}>

        <table className={`table ${styles.table}`} cellSpacing={10}>
          <tr>
            <td rowSpan={2} className={styles.td}>
              <Image src={"/assets/images/home/swap.svg"} width={200} height={200} alt='swap' />
              <div className={styles.heading}>
                Swap Crypto with ease
              </div>
              <div className={styles.subHeading}>Swap smarter, not harder with Plena Finance - fast, safe, and competitive crypto swaps.</div>
            </td>
            <td className={styles.td}>
              <Image src={"/assets/images/home/lending.svg"} width={200} height={200} alt='lending' />
              <div className={styles.heading}>Lending Protocol</div>
              <div className={styles.subHeading}>Earn Interest with Top Protocols in the Industry with Just a Tap!</div>
            </td>
            <td className={styles.td}>
              <Image src={"/assets/images/home/stake.svg"} width={200} height={200} alt='stake' />
              <div className={styles.heading}>Stake your assets</div>
              <div className={styles.subHeading}>Earn Interest with Top Protocols in the Industry with Just a Tap!</div>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className={styles.td}>
              <div>
                <div className={styles.heading}>Liquidity Pools</div>
                <div className={styles.subHeading}>Enjoy the best exchange rates across all decentralized exchanges in one place!</div>
              </div>
              <Image src={"/assets/images/home/pools.svg"} width={200} height={200} alt='pools' />
            </td>
          </tr>
        </table>
      </div>

    </div>
  )
}

export default FeaturesSection
