import NodeMediaServer from 'node-media-server';

const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60,
    },
};

const nms = new NodeMediaServer(config);
nms.run();
