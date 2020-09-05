const internalIp = require('internal-ip');
const express = require('express');
const nunjucks = require('nunjucks');
const server = express();

server.use(express.static('./public/build', {
    cacheControl: true
}));

const fakeData = {
    results: [{
        marka: 'Adidas',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "10000",
        popust: "15",
        imageName: "ironi-zenske-haljine-haljina-hardal-1",
        brojevi: [33, 34, 44, 45]
    }, {
        marka: 'Adidas',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "10,000",
        popust: "15",
        imageName: "ironi-zenske-haljine-haljina-hardal-1",
        brojevi: [33, 34, 44, 45]
    }, {
        marka: 'Adidas',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "10,000",
        popust: "15",
        imageName: "ironi-zenske-haljine-haljina-hardal-1",
        brojevi: [33, 34, 44, 45]
    }, {
        marka: 'Nike',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "10,000",
        popust: "15",
        imageName: "ironi-zenske-haljine-haljina-hardal-1",
        brojevi: [33, 34, 44, 45]
    }, {
        marka: 'Puma',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "10,000",
        popust: "45",
        imageName: "ironi-zenske-haljine-haljina-hardal-1",
        brojevi: [33, 34, 44, 45]
    }, {
        marka: 'Nike',
        kategorija: 'Patike',
        model: 'Terrex TraceRocker Trail Running Men',
        cena: "15,000",
        popust: false,
        imageName: "ironi-zenske-haljine-haljina-hardal-1",
        brojevi: [33, 34, 44, 45]
    }]
};


nunjucks.configure('./views', {
    autoescape: true,
    express: server,
    watch: true
});

server.get('/', function (req, res) {
    res.render('home.njk', {
        pageType: 'home',
    });
});

server.get('/home', function (req, res) {
    res.render('home.njk', {
        pageType: 'home',
    });
});

server.get('/search', function (req, res) {
    res.render('search.njk', {
        pageType: 'search',
        results: fakeData.results,
        itemsRowSize: 4
    });
});


server.get('/detail', function (req, res) {
    res.render('detail.njk', {
        pageType: 'detail',
        results: fakeData.results
    });
});

server.get('/favourite', function (req, res) {
    res.render('favourite.njk', {
        pageType: 'favourite',
        results: fakeData.results,
    });
});

server.get('/order', function (req, res) {
    res.render('order.njk', {
        pageType: 'order',
    });
});

server.get('/cart', function (req, res) {
    res.render('cart.njk', {
        pageType: 'cart',
    });
});

server.get('/help', function (req, res) {
    res.render('help.njk', {
        pageType: 'help',
    });
});

server.get('/ordering', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'ordering',
    });
});

server.get('/payment-options', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'payment-options',
    });
});

server.get('/help-info', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'help-info',
    });
});

server.get('/delivery', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'delivery',
    });
});

server.get('/about', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'about',
    });
});

server.get('/claims', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'claims',
    });
});

server.get('/contact', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'contact',
    });
});

server.get('/cookie-management', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'cookie-management',
    });
});

server.get('/faq', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'faq',
    });
});

server.get('/returns-refunds', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'returns-refunds',
    });
});

server.get('/terms-conditions', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'terms-conditions',
    });
});

server.get('/privacy-information', function (req, res) {
    res.render('help-info.njk', {
        pageType: 'privacy-information',
    });
});


server.listen(process.env.PORT || 9191, function () {
    console.log('Express server running on http://localhost:9191');
    console.log(`Express local IP http://${internalIp.v4.sync()}:9191`);
});
