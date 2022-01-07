import Layout from '@components/layout'
import Head from 'next/head';
import Script from 'next/script';
import { HubSpotForm } from '@components/hubSpotForm';
import {hubSpotFormCreate} from '@lib/hubspot';



const formDetail = {
  css: '.hs-form.stacked .field div.input {padding-top:5px; padding-bottom:5px;} .hs-input {width:225px; height: 33px; font-size: 20px; padding-left: 3px; padding-right: 3px; border: 1px solid gray}  textarea.hs-input { height: 100% } .hs-form-field {color: #000; font-size: 20px;} .btn-primary, .hs-button.primary {width: 225px !important; height: 45px; font-size: 24px; color: #fff; text-shadow: 1px 1px #000; margin-top: 18px; border-radius: 6px !important; background: #623293 !important; border-width: 0px !important; cursor: pointer !important; -webkit-box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3); -moz-box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3); box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3);} .base-hs-styles:hover, .hs-form .hs-button:hover {width: 225px !important; height: 45px; font-size: 24px; color: #fff; font-weight: regular; text-shadow: 1px 1px #000; margin-top: 18px; border-radius: 6px !important; background: rgb(0, 85, 135) !important; border-width: 0px !important; cursor: pointer !important;} .hs-error-msgs {font-size: 12px;}',
  region: "na1",
  portalId: "182354",
  formId: "ef77071e-9c6b-4a71-8bbe-a71b46eab443",
  target: ".form"
};

export default function HubSpot({}) {
  return (
    <>
      <Layout>
          <Head>
              <title>{'Next JS HubSpot Integration'}</title>
          </Head>
          <Script id="huspot-js" strategy="afterInteractive" type="text/javascript" src="//js.hsforms.net/forms/v2.js" 
             onLoad={() => {
                hubSpotFormCreate(formDetail)
            }}
          />
          <HubSpotForm formDetail={formDetail} />
      </Layout>
    </>
  )
}