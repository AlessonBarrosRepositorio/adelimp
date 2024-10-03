window.addEventListener('load', () => {
    // Nome do cache
    const cacheName = 'meu-cache-v1';
    
    // Lista de URLs que você quer cachear
    const urlsToCache = [
        'https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882200/teste-link/xd90p4eelwkdcdmbxxpg.jpg',
        'https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882202/teste-link/c0zdhg54tfos2yquwbow.jpg',
        'https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882201/teste-link/gfiiuqei7eoa6jnzohie.jpg',
        'https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882201/teste-link/pxpjaephtwonwe5oddvx.jpg',
        'https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882200/teste-link/ypvev4uhpha7ix8exuao.jpg',
        'https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882201/teste-link/ehpvf5hxndcvy6lkhexh.jpg',
        'https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882201/teste-link/vahcxozvdddwdj2sbn9o.jpg',
        'https://res.cloudinary.com/dotl7tsgw/image/upload/v1725882202/teste-link/vtfurokuofvkkovrdlpo.jpg',
        'https://res.cloudinary.com/dotl7tsgw/image/upload/v1725885603/teste-link/k23wetcl7l7uhyifnyrw.jpg',
        'https://res.cloudinary.com/dotl7tsgw/image/upload/v1725885602/teste-link/eiumwtvldsdxbj0xenud.jpg" alt="" class="imgCarta',
        'https://res.cloudinary.com/dotl7tsgw/image/upload/v1725885603/teste-link/wy02haibqlyxqxatzdam.jpg" alt="" class="imgCarta'
        // Adicione mais URLs se necessário
    ];

    // Verifica se o Cache Storage é suportado
    if ('caches' in window) {
        caches.open(cacheName).then((cache) => {
            console.log('Cache aberto:', cacheName);
            return cache.addAll(urlsToCache); // Adiciona todos os arquivos ao cache
        }).then(() => {
            console.log('Arquivos cacheados com sucesso!');
        }).catch((error) => {
            console.error('Falha ao armazenar no cache:', error);
        });
    } else {
        console.error('Cache Storage não é suportado neste navegador.');
    }

});
