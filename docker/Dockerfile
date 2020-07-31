FROM node:lts

WORKDIR /src
RUN groupadd -r -g 999 docker && useradd -r -g docker -u 999 docker --create-home

# Define timezone
ENV TZ=Europe/Paris
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

# Set the locale
RUN apt-get update -y && \
    apt-get install -y locales && \
    sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN apt-get update -y && \
	apt-get upgrade -y && \
	apt-get install -y \
	    ca-certificates \
	    gnupg2 \
	    software-properties-common \
	    wget \
	    curl \
	    git

# Install Gosu
ENV GOSU_VERSION 1.11
RUN for server in $(shuf -e ha.pool.sks-keyservers.net \
            hkp://p80.pool.sks-keyservers.net:80 \
            keyserver.ubuntu.com \
            hkp://keyserver.ubuntu.com:80 \
            pgp.mit.edu) ; do \
        gpg --keyserver "$server" --recv-keys B42F6819007F00F88E364FD4036A9C25BF357DD4 && break || : ; \
    done && \
    curl -o /usr/local/bin/gosu -SL "https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-$(dpkg --print-architecture)" && \
    curl -o /usr/local/bin/gosu.asc -SL "https://github.com/tianon/gosu/releases/download/$GOSU_VERSION/gosu-$(dpkg --print-architecture).asc" && \
	gpg --batch --verify /usr/local/bin/gosu.asc /usr/local/bin/gosu && \
    rm /usr/local/bin/gosu.asc && \
    chmod +x /usr/local/bin/gosu

# Install nodejs dependencies
RUN yarn global add mocha serve

# Cleaning
RUN rm -rf /var/lib/apt/lists/* && \
    apt-get autoremove -y --purge

ADD docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

COPY ./src /src
RUN docker-entrypoint.sh install

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["run"]
