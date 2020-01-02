module.exports = {
    navigation:{
      logout_CTA:'#tdb4'
    },

    productCatalog:{
        pageHeader: '//h1[contains(.,"Welcome")]',
        video3:'(//td)[3]'
    },

    productDetails:{
        productTitle: '(//h1)[2]',
        productPrice:'(//h1)[1]',
        productImage:'(//img)[3]',
        productImage_bestseller: '(//img)[2]',
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
      },

      productSearch:{
        input: '//input[@name="keywords"]',
        submit: '//input[@title=" Quick Find "]',
        results:{
          productImage: '(//img)[2]',
          productName: '(//div[contains(@class,"infoBoxContainer")]//a)[8]',
          productPrice: '(//div[contains(@class,"infoBoxContainer")]//td)[7]',
          productCTA: '#tdb4',
          no_results_msg: 'There is no product that matches the search criteria.'
        },
      },

      productList:{
        menu:'//select[@name="manufacturers_id"]',
        o_Fox:'//option[@value="4"]',
        o_Canon: '//option[@value="6"]',
        results: '//div[@class="contentContainer"]',
        no_items_found: 'There are no products available in this category.',
      },

      bestSellersList:{
        link1: '(//a[contains(.,"Unreal Tournament")])[2]',
        link2: '(//a[contains(.,"Matrox")])[3]',
        link3: '(//a[contains(.,"Speed")])[3]',
        link4: '//a[contains(.,"IntelliMouse Pro")]',
        link5: '//a[contains(.,"Samsung Galaxy Tab")]'
      },

      applitools_landingPage:{
        cta: '//button[contains(., "Click")]'
      }
}