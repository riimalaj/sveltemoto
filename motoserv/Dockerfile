FROM denoland/deno:debian-1.18.0

EXPOSE 3000 3001 3002

ADD . /app

WORKDIR /app

RUN deno run --allow-run --allow-read -r https://deno.land/x/snel/install.ts

RUN mkdir /root/.deno

RUN mkdir /root/.deno/trex_storage

CMD [ "/usr/local/bin/trex", "run", "start" ]