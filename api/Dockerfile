FROM ubuntu:14.04

RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    zlib1g-dev \
    libreadline-dev \
    libyaml-dev \
    libcurl4-openssl-dev \
    libffi-dev \
    libmysqlclient-dev \
    libsqlite3-dev \
    curl \
    git \
    wget \
    libicu-dev \
    && rm -rf /var/lib/apt/lists/*

RUN wget http://ftp.ruby-lang.org/pub/ruby/1.9/ruby-1.9.3-p551.tar.gz && \
    tar -xzvf ruby-1.9.3-p551.tar.gz && \
    cd ruby-1.9.3-p551 && \
    ./configure && \
    make && \
    make install && \
    cd .. && rm -rf ruby-1.9.3-p551*

RUN ruby -v

RUN wget https://rubygems.org/rubygems/rubygems-1.8.29.tgz && \
    tar -xzvf rubygems-1.8.29.tgz && \
    cd rubygems-1.8.29 && \
    ruby setup.rb && \
    cd .. && rm -rf rubygems-1.8.29*

RUN gem -v

RUN gem install rails -v 2.3.8 --verbose

RUN gem install bundler -v 1.17.3 --verbose
RUN gem install rake -v 0.9.2.2 --verbose
RUN gem install actionpack -v 2.3.8 --verbose
RUN gem install activerecord -v 2.3.8 --verbose
RUN gem install activesupport -v 2.3.8 --verbose
RUN gem install activeresource -v 2.3.8 --verbose
RUN gem install mysql --verbose
RUN gem install rdoc -v 3.9.5 --verbose
RUN gem install json -v 1.5.5 --verbose
RUN gem install rack -v 1.1.6 --verbose

WORKDIR /app

EXPOSE 3000

# CMD ["ruby", "script/server", "-b", "0.0.0.0", "-e", "development"]
