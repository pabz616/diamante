module.exports = {
    navigation:{
      logout_CTA:'#tdb4'
    },

    productList:{
        pageHeader: '(//h1)',
        video3:'(//td)[3]'
    },

    productDetails:{
        productTitle: '(//h1)[2]',
        productPrice:'(//h1)[1]',
        productImage:'(//img)[3]',
        addToCart_CTA: '#tdb4'
    },
    
    cart:{
        pageHeader: '(//h1)',
        productImage: '//img[contains(.,"Speed")]',
        productTitle:'//td/a/strong',
        productPrice:'//p/strong',
        checkout_CTA: '#tdb5'
    },

    loginForm:{
        pageHeader: '(//h2)[2]',
        usn: '//input[@name="email_address"]',
        pwd: '//input[@name="password"]',
        submit:'#tdb5'
      },

      shippingDetails:{
        pageHeader: '(//h1)',
        continue_CTA: '#tdb6'
      },

      paymentDetails:{
        pageHeader: '(//h1)',
        payment_method_cod: '//input[@value="cod"]',
        continue_CTA: '#tdb6'
      },

      confirmationDetails:{
        pageHeader: '(//h1)',
        confirm_CTA: '#tdb5'
      },

      successDetails:{
        pageHeader: '(//h1)',
        continue_CTA: '#tdb5'
      }
}