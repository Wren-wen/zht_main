BOLD := $(shell tput -T linux bold)
GREEN := $(shell tput -T linux setaf 2)
PURPLE := $(shell tput -T linux setaf 5)
RESET := $(shell tput -T linux sgr0)

SUCCESS := $(BOLD)$(GREEN)
TITLE := $(BOLD)$(PURPLE)

.PHONY: start stop transfer

start:
	@NODE_ENV=1 nohup tsx index.ts > run.log 2>&1 &
	@printf '$(SUCCESS)start successfully!\n$(RESET)'

transfer:
	@scp -P 716 -r .\models\ .\router\ .\utils\ .\index.ts .\package.json .\tsconfig.json zht@110.42.101.86:/home/zht/main-server/

rsync:
	@rsync -avz -e 'ssh -p 716' --exclude='package-lock.json' --exclude='pnpm-lock.yaml' --exclude='node_modules/*' * zht@110.42.101.86:/home/zht/main-server/