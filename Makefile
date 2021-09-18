rm:
	docker-compose stop && docker-compose rm -f	
build-dev:
	docker-compose -f docker-compose.dev.yml build
build-prod:
	docker-compose -f docker-compose.yml build
dev:
	docker-compose -f docker-compose.dev.yml up -d
tests:
	docker exec kitstarter-docker_api_server yarn test
prod:
	docker-compose -f docker-compose.yml up
