source 'https://rubygems.org'
ruby '2.3.2'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'
gem 'pg'
gem 'puma', '~> 3.0'
gem 'rails', '~> 5.0.1'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

gem 'bootstrap', '4.0.0.alpha6'
gem 'font-awesome-rails'
gem 'foreman'
gem 'webpacker', github: 'rails/webpacker'

gem 'faraday'
gem 'oauth2'
gem 'omniauth-google-oauth2', '~> 0.5.2'
gem 'will_paginate', '~> 3.1'

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
